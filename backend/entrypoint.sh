#!/bin/bash

# Führe die Migrationen durch
python manage.py makemigrations
python manage.py migrate

# Starte den Django-Server
exec python manage.py runserver 0.0.0.0:8000
