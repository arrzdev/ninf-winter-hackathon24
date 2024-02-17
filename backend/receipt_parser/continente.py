import PyPDF2
import re

# run for each pdf file using PdfReader
def scrape_pdf(filename):

    print(filename)

    reader = PyPDF2.PdfReader(filename)
    
    text = reader.pages[0].extract_text()

    split_filter = r'(\d{2}/\d{2}/\d{4}) \d{2}:\d{2}|IVADESCRICAO VALOR|TOTAL A PAGAR (\d+,\d{2})'

    _, date, _, content, total, _ = filter(None, re.split(split_filter, text))
    total = float(total.replace(',', '.'))

    # if card credit is used, the payment is under SUBTOTAL instead of TOTAL A PAGAR
    subtotal_filter = r'^SUBTOTAL +(\d+,\d{2}) *$'
    subtotal = re.findall(subtotal_filter, text, re.MULTILINE)
    if subtotal:
        total = float(subtotal[0].replace(',', '.'))

    # Categories are composed by letters, "/", "-" and ".", followed by :
    # Get categories without the ":" at the end
    categories = re.findall(r'[a-zA-Z/.\- &]+(?=:)', content)

    # Pattern to split by categories
    pattern = '|'.join(map(re.escape, categories))
    products = re.split(pattern, content)[1:]

    products = re.split("\n", "".join(products))

    # Remove every string that is ":" or empty
    products = list(filter(lambda x: x != ':' and x != '', products))

    # Remove (A), (B) and (C) from the beginning of the string
    products = list(map(lambda x: re.sub(r'^\([A-C]\)', '', x), products))

    # Remove strings starting with "POUPANCA"
    products = list(filter(lambda x: not x.startswith('POUPANCA'), products))

    if len(products) > 2 and products[-2].startswith('SUBTOTAL'):
        products = products[:-2]

    for i in range(len(products)):
        if products[i].startswith('IS') and products[i+1].startswith('Isento-IVA'):
            products[i] = products[i][2:]
            products.pop(i+1)
            break

    count_filter = r"^(?:\([A-Z]\)|IS) *(\S(?: ? ?\S)*) *\n *(\d+) X (\d+,\d{2}) \d+,\d{2} *$"
    regular_filter = r"^(?:\([A-Z]\)|IS) *(\S(?: ? ?\S)*) (\d+,\d{2})$"
    all_filters = re.compile(f"{count_filter}|{regular_filter}", re.MULTILINE)
    
    filtered_products = re.findall(all_filters, content)

    # remove empty strings
    for i in range(len(filtered_products)):
        filtered_products[i] = list(filter(None, filtered_products[i]))
    
    parsed_products = []

    for p in filtered_products:
        # products with multiple quantities
        if len(p) == 3:
            parsed_p = {
                "name": p[0],
                "price": float(p[2].replace(',', '.')),
                "quantity": float(p[1])
            }
        else:
            parsed_p = {
                "name": p[0],
                "price": float(p[1].replace(',', '.')),
                "quantity": 1
            }
        parsed_products.append(parsed_p)
    
    return {
        "date": date,
        "total": total,
        "products": parsed_products
    }