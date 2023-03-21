# Paquito

Motor de búsqueda mejorado para el SECOP II.

Guía para ejecutar el motor de búsqueda por primera vez:

**Es necesario correr primero el backend y después el frontend.**

En caso de haber instalado anteriormente algún paquete, se puede saltar ese paso.
Antes de iniciar con la ejecución de Paquito es necesario instalar [Node Js](https://nodejs.org/en/download).

- Para correr el back-end:
    1. Abrir la carpeta donde se encuentra el back-end usando la terminal de su preferencia (`cd back-end`) 
    2. Correr la siguiente línea de código en la terminal `pip install -r requirements.txt` 
    3. Finalmente ejecutar el siguiente código `uvicorn main:app --reload`


- Para correr el front-end:
    1. Abrir la carpeta donde se encuentra el front-end usando una nueva terminal (`cd front-end`)
    2. Correr la siguiente línea de codigo en la terminal `npm install` 
    4. Finalmente ejecutar el siguiente código `npm run`
