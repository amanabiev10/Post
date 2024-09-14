# Backend Dockerfile (Django)

# Verwende ein Python-Basisimage
FROM python:3.12.5-slim

# Arbeitsverzeichnis im Container
WORKDIR /app

# Pip aktualisieren und Abhängigkeiten installieren
RUN pip install --upgrade pip
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# Kopiere den restlichen Code des Backend-Projekts
COPY . /app

# Setze die Umgebungsvariable für Django
ENV DJANGO_SETTINGS_MODULE=backend.settings

# Führt die Django-Kommandos aus: Migrationen und Starten des Servers
CMD ["sh", "-c", "python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
