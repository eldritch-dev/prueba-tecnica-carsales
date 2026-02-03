# PruebaTecnicaCarsales
Web Prueba Técnica Carsales

# Consideraciones Técnicas
1. El proyecto usa Angular 20 y fue escrito y revisado en Visual Studio Code.
2. Si no tiene Visual Studio Code, descargar e instalar desde https://code.visualstudio.com/download.
3. Si no tiene instalado Node.js, descargar e instalar Node 22.15.1 desde https://nodejs.org/es/blog/release/v22.15.1.
4. Si no tiene instalado Angular CLI 20, y luego de haber instalado Node, ejecutar en la terminal de Visual Studio Code el siguiente comando: npm install -g @angular/cli@20.

# ¿Cómo Funciona?
Al abrir la app web en el navegador, se accede directamente al listado de personajes
de Rick y Morty. En la barra de navegación se puede encontrar también un botón con acceso a la lista de episodios. Al hacer click sobre cualquiera de los botones, se accede a una lista.

# Instrucciones para probar el proyecto
En gitbash o powershell:
1. En raíz del proyecto ejecutar "npm i" para instalar dependencias.
2. Ejecutar "ng s -o --no-hmr" para levantar el proyecto. Se abrirá el navegador con el sitio web.

Visitar proyecto en "http://localhost:4200" si es que no se abrió el navegador.

# Detalles
1. El proyecto se ha implementado utilizando arquitectura basada en características, muy similar a la arquitectura vertical del backend for frontend, en donde cada caso de uso es aquí una característica (feature). La carpeta "/app/services/" se ha definido para smart services and components transversales y la carpeta shared para dumb components transversales. Como ejemplo, "Error" es un componente smart por lo que se le ha creado una carpeta propia dentro de "/app/core/error/".
2. El proyecto presenta 2 funcionalidades principales: obtener personajes y obtener episodios.
3. A su vez, presenta 3 funcionalidades extra en la vista de obtención de personajes: buscar por nombre, filtrar por especie y filtrar por género. Estas funcionalidades se pueden combinar.
