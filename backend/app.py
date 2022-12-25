import json
from flask import Flask , jsonify, request
import requests
from flask_cors import CORS, cross_origin
from ConnectToDB import openDB
import mysql.connector


app = Flask(__name__)
CORS(app)
# 
# class Person:
#     def __init__(self, email, time):
#         self.email = email
#         self.time = time

incomes = [
    { 'id':'1' ,'description': 'salary', 'amount': 5000 },
    { 'id':'2' ,'description': 'salary', 'amount': 2000 },
    { 'id':'3' ,'description': 'salary', 'amount': 3000 }
]


def find_obj(arr, key):
    for x in arr:
        if x.get('id') == key:
            return x
    return None


@app.route('/incomes', methods=['GET'])
def get_incomes():
    print('1')
    return jsonify(incomes)

@app.route('/incomes/<id>', methods=['GET'])
def post_incomes(id):
    print(id)
    incomes_item = find_obj(incomes,id)
    print(incomes_item)
    return jsonify(incomes_item)


@app.route('/incomes', methods=['POST'])
def add_income():
    print('2')
    incomes.append(request.get_json())
    return '', 204


    
@app.route('/')
def index():
    return "hello world 2222"

# mydb = openDB()    
app.run(host='0.0.0.0', port=4000, debug=True)