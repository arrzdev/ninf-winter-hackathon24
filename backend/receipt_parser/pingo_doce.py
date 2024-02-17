import PyPDF2
import re

# run for each pdf file using PdfReader
def scrape_pdf(filename):
    reader = PyPDF2.PdfReader(filename)
    
    text = reader.pages[0].extract_text()

    split_filter = r'^Artigos *$|^Resumo *$|^TOTAL A PAGAR +(\d+,\d{2})|Data de emissão:(\d{2}/\d{2}/\d{4})'

    _, content, _, total, _, data, _ = filter(None, re.split(split_filter, text, flags=re.MULTILINE))

    total = float(total.replace(',', '.'))

    categories = re.findall(r'^\S.+', content, re.MULTILINE)
    categories = [c.strip() for c in categories]

    # Remove categories
    pattern = '|'.join(map(re.escape, categories))
    # First element is newline
    products = re.split(pattern, content)[1:]
    
    # products on sale (Poupança Imediata)
    sale_filter = r"^ +[A-Z] +\d+% +(.*\w) +(\d+,\d{2}) *\n +Poupança Imediata +\((\d+,\d{2})\)"

    # products that are counted
    count_filter = r"^ [A-Z] +\d+% (\S(?: ?\S)*) +\n .*(\d+,\d{2}) $"

    # regular products
    regular_filter = r"^ [A-Z] +\d+% (\S(?: ?\S)*) +(\d+,\d{2}) +$"

    all_filters = re.compile(f"{sale_filter}|{count_filter}|{regular_filter}", re.MULTILINE)

    filtered_products = re.findall(all_filters, content)

    # remove empty strings
    for i in range(len(filtered_products)):
        filtered_products[i] = list(filter(None, filtered_products[i]))

    products_dict = {}

    for p in filtered_products:
        # adjust price for items on sale
        if len(p) == 3:
            price = float(p[1].replace(',', '.'))
            discount = float(p[2].replace(',', '.'))
            products_dict[p[0]] = round(price - discount, 2)
        else:
            products_dict[p[0]] = float(p[1].replace(',', '.'))

    return {
        "date": data,
        "total": total,
        "products": products_dict
    }
