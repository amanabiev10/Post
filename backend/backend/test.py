import requests

url = 'http://localhost:8000/api/posts/'

# Sende die GET-Anfrage
response = requests.get(url)

# Ausgabe des Statuscodes und der Antwort
print(f'Statuscode: {response.status_code}')
print(f'Inhalt: {response.json()}')
