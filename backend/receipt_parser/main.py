import os
import continente as cnt
import pingo_doce as pd
from pymongo import MongoClient

def save_to_db(data):
    client = MongoClient('localhost', 27017)
    db = client['receipts']
    collection = db['receipts']

    for entry in data:
        collection.insert_one(entry)

    client.close()

def scrape_pdf(directory, filename):
    if directory == "continente":
        entry = cnt.scrape_pdf(filename)
    elif directory == "pingo_doce":
        entry = pd.scrape_pdf(filename)
    else:
        print("Unknown directory")
        return

    entry["store"] = directory

    return entry

if __name__ == "__main__":

    data = []

    # run for each file in directory faturas
    for directory in os.listdir('receipts'):
        for filename in os.listdir('receipts/' + directory):
            entry = scrape_pdf(directory, f"receipts/{directory}/{filename}")
            data.append(entry)
    
    save_to_db(data)
