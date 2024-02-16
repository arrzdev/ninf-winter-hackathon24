import requests
import json

#/c/...
categories = [
  "alternativas-alimentares",
  "animais",
  "bebés",
  "bebidas",
  "bricolage-auto-e-jardim",
  "casa",
  "charcutaria",
  "congelados",
  "frutas-e-legumes",
  "higiene-e-beleza",
  "laticínios-e-ovos",
  "lazer",
  "mercearia",
  "padaria-e-pastelaria",
  "talho-e-peixaria"
]

#/loja  /...
supermercados = [
    "el-corte-inglés",
    "continente",
    "pingo-doce",
    "auchan"
]

# URL to scrape
url = "https://www.kabaz.pt/search/promocoes/loja/continente?q=tremo%C3%A7os"

# Send a GET request to the URL
response = requests.get(url)
html = response.text

init_tag = "<script id=\"__NEXT_DATA__\" type=\"application/json\">"
init_data = html.index(init_tag)

end_tag = "</script>"
end_data = html.index(end_tag, init_data)

json_data = html[init_data+len(init_tag):end_data]

#parse json
endpoint_data = json.loads(json_data)

with open("data.json", "w") as f:
  json.dump(endpoint_data, f)

hits = endpoint_data["props"]["pageProps"]["serverState"]["initialResults"]["Products"]["results"][0]["hits"]

for index, hit in enumerate(hits):
  print(str(index) + " " + hit["product"]["name"])