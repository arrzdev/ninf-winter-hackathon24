import os
import continente as cnt
import pingo_doce as pd
from pymongo import MongoClient
from pymongo import ASCENDING

def save_to_db(data):
    client = MongoClient('localhost', 27017)
    db = client['groceries']
    collection = db['receipt']

    # Sort the data by date before insertion
    sorted_data = sorted(data, key=lambda x: x.get('date', ''))

    # Create an index on the 'date' field for efficient querying
    collection.create_index([('date', ASCENDING)])

    # Insert sorted entries into the database
    for entry in sorted_data:
        collection.insert_one(entry)

    client.close()


def scrape_pdf(directory, filename):
    if directory == "continente":
        entry = cnt.scrape_pdf(filename)
    elif directory == "pingo-doce":
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
