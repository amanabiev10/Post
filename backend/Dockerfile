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

# Kopiere das Entry-Point-Skript und setze die Ausführungsrechte
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# Setze das Entry-Point-Skript
ENTRYPOINT ["/app/entrypoint.sh"]

# Django-Server starten
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
