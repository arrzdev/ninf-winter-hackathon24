from flask import Flask, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId


app = Flask(__name__)
mongo = MongoClient('localhost', 27017)

@app.route('/receipts', methods=['GET'])
def get_receipts():
    db = mongo['groceries']
    collection = db['receipt']

    # get all receipts but convert id to string
    receipts = list(collection.find({}))
    for receipt in receipts:
        receipt['id'] = str(receipt['_id'])
        del receipt['_id']
    
    return jsonify(receipts)


# get a receipt by id
@app.route('/receipts/<id>', methods=['GET'])
def get_receipt(id):
    db = mongo['groceries']
    collection = db['receipt']

    receipt = collection.find_one({'_id': ObjectId(id)})

    print(receipt)
    receipt['id'] = str(receipt['_id'])
    del receipt['_id']

    return jsonify(receipt)


if __name__ == "__main__":
    app.run(debug=True)
