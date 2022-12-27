import requests

######################################   examples   ##############################################
# response = requests.get('http://localhost:9200/_cat/indices', auth=('elastic','LYc2xPW4cKJun2HjbIjD'))
# print(response.text)

# response = requests.get('http://localhost:9200/_cat/indices?format=json&pretty', auth=('elastic','LYc2xPW4cKJun2HjbIjD'))
# # print(response.json())
# data = response.json()
# [print(row ['index']) for row in data]

########################  create index using elastic API ###################################

# response = requests.put('http://localhost:9200/test_index_using_api', auth=('elastic','LYc2xPW4cKJun2HjbIjD'))
# print(response.text)

######################## search specipic index using elastic API #################################

index_name = 'sample'
response = requests.get('http://localhost:9200/'+index_name, auth=('elastic','LYc2xPW4cKJun2HjbIjD'))
keys=response.json().keys()
found=0
for key in keys:
    if key == index_name:
        found=1
        break
if(found==1):
    print(f"{index_name} has been found")
else:
    print(f"{index_name} has not been found")





