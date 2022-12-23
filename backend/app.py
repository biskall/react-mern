import json
from flask import Flask , jsonify, request
import requests
from flask_cors import CORS, cross_origin
from ConnectToDB import openDB
import mysql.connector


app = Flask(__name__)
# CORS(app)
# 
# class Person:
#     def __init__(self, email, time):
#         self.email = email
#         self.time = time

incomes = [
    { 'description': 'salary', 'amount': 5000 }
]


@app.route('/incomes')
def get_incomes():
    print('1')
    return jsonify(incomes)


@app.route('/incomes', methods=['POST'])
def add_income():
    print('2')
    incomes.append(request.get_json())
    return '', 204


    
@app.route('/')
def index():
    return "hello world 2222"

# mydb = openDB()    
app.run(host='0.0.0.0', port=4000)