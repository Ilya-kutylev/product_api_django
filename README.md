# API for products and working with frontend

<br>

## Contents
- [Functionality](#functionality)
- [Technology](#technology)
- [Application startup](#application-startup)

<br>

## Functionality
  - API with two endpoints:
    - POST request to create a product (accepts JSON data).
    - GET request to get a list of all products in JSON format.
  - Business logic is implemented with JavaScript that sends form data to the API using AJAX (Fetch API).

## Technology

<details><summary>List</summary>

**Programming languages:**

[![Python](https://img.shields.io/badge/Python-3.12-blue?logo=python)](https://www.python.org/)

**Databases:**

[![SQLite3](https://img.shields.io/badge/-SQLite3-464646?logo=SQLite3)](https://www.sqlite.org/download.html)

</details>

## Application startup

```bash
git clone https://github.com/Ilya-kutylev/product_api_django.git
cd product_api_django
```
- Creating and activating a virtual environment, installing dependencies.
```bash
pip install pipenv
pipenv shell
pipenv install
```
- Perform migrations before launching the web application. For the web application to work correctly, you must create a super user.
```bash
python manage.py migrate
python manage.py createsuperuser
```
- Will launch the web application:: http://127.0.0.1:8000/

