# Paquito

## Motor de búsqueda mejorado para el SECOP II.
La página del SECOP II tiene un buscador pobre a la hora de navegar los procesos de contratación. El buscador presenta las siguientes falencias: es poco versátil, carece de filtros importantes que impiden la búsqueda intuitiva de términos. Paquito es una página web que en el Front-end utiliza React y un Back-End que hace uso de FastAPI. Con el fin de mejorar la búsqueda, implementamos procesamiento de lenguaje natural y buscamos coincidencias de palabras (en vez de coincidencias específicas).

## Requisitos previos para la ejecución del motor de búsqueda

Antes de iniciar con la ejecución de Paquito es necesario instalar [Python](https://www.python.org/downloads/), [Node Js](https://nodejs.org/en/download) y [Git](https://git-scm.com/downloads).

## Instrucciones de cómo descargar e instalar el repositorio

1. Haz clic en el botón verde "Code".
2. Copia el enlace del repositorio que sale debajo de HTTPS.
3. Abre la terminal de tu computadora y navega hasta la ubicación donde deseas clonar el repositorio. Puedes hacerlo utilizando el comando `cd` seguido de la ruta de la carpeta en la que deseas clonar el repositorio.
4. Una vez que estés en la ubicación correcta, ejecuta el comando `git clone [enlace SSH o HTTPS del repositorio]`. Esto descargará el repositorio completo y lo clonará en tu carpeta local.

¡Listo! Ya has descargado e instalado el motor de busqueda en tu computadora y estás listo para ser ejecutado.

## Guía para ejecutar el motor de búsqueda:

**Es necesario correr primero el back-end y después el front-end.**

- Para correr el back-end:
    1. Abrir la carpeta donde se encuentra el back-end usando la terminal de su preferencia (`cd back-end`) 
    2. Correr la siguiente línea de código en la terminal `pip install -r requirements.txt` 
    3. Finalmente ejecutar el siguiente código `uvicorn main:app --reload`


- Para correr el front-end:
    1. Abrir la carpeta donde se encuentra el front-end usando una nueva terminal (`cd front-end`)
    2. Correr la siguiente línea de codigo en la terminal `npm install` 
    3. Finalmente ejecutar el siguiente código `npm start`
    
## Funcionalidades disponibles y cómo acceder a ellas.

Paquito ofrece un buscador de contratos públicos que permite a los usuarios realizar búsquedas a través de palabras clave. Además de esto, los usuarios pueden utilizar filtros de búsqueda para limitar su búsqueda según el monto o la fecha de los contratos. Para acceder a estas funcionalidades, los usuarios simplemente deben ingresar las palabras clave que desean buscar en el cuadro de búsqueda y luego aplicar los filtros relevantes a través de la interfaz del buscador. Además, Paquito ofrece funcionalidades de accesibilidad, como la internacionalización de la página, que permite a los usuarios ver el contenido en diferentes idiomas según su preferencia.

## Deseas contribuir al proyecto
¡Gracias por estar interesado en contribuir a nuestro proyecto! Hay varias maneras en las que puedes ayudar a mejorar nuestro proyecto y reportar errores.

Para contribuir al proyecto, puedes hacer lo siguiente:

- Fork del repositorio: haz un fork de nuestro repositorio para hacer una copia del proyecto en tu cuenta de GitHub.

- Clonar el repositorio: clona el repositorio de tu cuenta de GitHub en tu ordenador local utilizando el comando `git clone`.

- Haz tus cambios: realiza los cambios necesarios en tu copia del proyecto.

- Crea una rama: crea una nueva rama para tus cambios utilizando el comando `git checkout -b nueva_rama`.

- Haz un commit de tus cambios: una vez que hayas realizado los cambios necesarios, realiza un commit con una descripción clara y concisa de los cambios realizados utilizando el comando `git commit -m 'Descripción del commit'`.

- Envía un pull request: sube tus cambios a tu copia del proyecto en GitHub y envía un pull request para que podamos revisar tus cambios y fusionarlos con el proyecto principal.

Para informar errores, puedes hacer lo siguiente:

- Abre un issue: si encuentras un error en nuestro proyecto, abre un issue en nuestro repositorio en GitHub. Proporciona una descripción detallada del error y cómo se puede replicar.

- Proporciona información adicional: si es posible, proporciona información adicional, como capturas de pantalla o registros de errores, para ayudarnos a identificar y solucionar el problema.

- Sigue las actualizaciones: una vez que hayas abierto un issue, sigue las actualizaciones del mismo para ver si se han proporcionado soluciones o se ha solicitado información adicional.

Agradecemos mucho tu contribución y tu ayuda para mejorar nuestro proyecto. ¡Gracias por tu tiempo y tu esfuerzo!

## Licencias y derechos de autor aplicables al proyecto
Este proyecto está disponible bajo la Licencia MIT. Esto significa que puedes usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y / o vender copias del software, y permitir que otros hagan lo mismo, siempre que se incluya el aviso de derechos de autor y la licencia en todas las copias o partes significativas del software.

La Licencia MIT no ofrece garantía alguna sobre el software, y el autor o los autores del software no se hacen responsables de ningún daño o reclamo de responsabilidad, ya sea en una acción de contrato, agravio o de otro modo, que surja de o en relación con el software o el uso u otros negocios en el software.

Siéntete libre de utilizar y contribuir a este proyecto, pero ten en cuenta que debes cumplir con los términos de la Licencia MIT y los derechos de autor aplicables. Si utilizas partes de este software en tu propio proyecto, asegúrate de incluir el aviso de derechos de autor y la licencia correspondiente. Si tienes alguna pregunta o inquietud sobre los términos de la licencia o los derechos de autor aplicables, no dudes en contactar al autor o autores del proyecto para obtener más información.
