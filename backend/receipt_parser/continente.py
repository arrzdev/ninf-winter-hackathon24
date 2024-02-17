import PyPDF2
import re

# run for each pdf file using PdfReader
def scrape_pdf(filename):
    reader = PyPDF2.PdfReader(filename)
    
    text = reader.pages[0].extract_text()

    split_filter = r'(\d{2}/\d{2}/\d{4}) \d{2}:\d{2}|IVADESCRICAO VALOR|TOTAL A PAGAR (\d+,\d{2})'

    _, date, _, content, total, _ = filter(None, re.split(split_filter, text))
    total = float(total.replace(',', '.'))

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

    products_dict = {}

    for product in products:
        name, price = re.split(r'(.+) (\d+,\d{2})', product)[1:3]
        products_dict[name] = float(price.replace(',', '.'))
    
    return {
        "date": date,
        "total": total,
        "products": products_dict
    }