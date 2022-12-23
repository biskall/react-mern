import mysql.connector
import os
from os.path import join, dirname
from dotenv import load_dotenv

def openDB():
    dotenv_path = join(dirname(__file__), '.env')
    # load the environment variables from .env file
    # load_dotenv(dotenv_path)

    # host_env = os.environ.get('HOST_SQL')
    # username_env = os.environ.get('USERNAME_SQL')
    # password_env = os.environ.get('PASSWORD_SQL')
    # database_env = os.environ.get('DATABASE_SQL')
    
    
    # connect to database in container
    # mydb = mysql.connector.connect(host=host_env,
    # username=username_env,
    # password=password_env,
    # database=database_env)

    # connect to database in my computer
    mydb = mysql.connector.connect(host='localhost',
    username='root',
    password='1234',
    database='itai')
    
    # data of 'participants_output.csv' file
    # insert_data(mydb)

    return mydb
