[![HTML5,CSS3 and JS](https://github.com/FransLopez/logo-images/blob/master/logos/html5-css3-js.png)](http://www.w3.org/) [![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)  [![Bootstrap](https://github.com/FransLopez/logo-images/blob/master/logos/bootstrap.png)](http://getbootstrap.com/)  [![SASS](https://github.com/FransLopez/logo-images/blob/master/logos/sass.png)](http://sass-lang.com/)  [![AngularJS](https://github.com/FransLopez/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/) [![Skylab](https://github.com/FransLopez/logo-images/blob/master/logos/skylab-56.png)](http://www.skylabcoders.com/)  

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

---

[skyEvents](https://devtoni.github.io/sky-events-project/)
==================

skyEvents es un proyeto de front-end, el cual sirve como buscador de eventos. Este proyecto consta de una pagina principal, la cual esta dividida en dos partes:

-**El buscador:** Consta de 2 inputs para buscar por Categoria del evento y por la localización. También hay dos options para buscar por rango de fecha y rango de distancia.

![img](img/portada.JPG)


-**Eventos mas populares:** Nos muestra unas tarjetas de los eventos mas populares de la localización en la que nos encontramos.

![img](img/portada2.JPG)


**La siguente parte** es una vez hecha una busqueda, no sale la pantalla con los resultados de la busqueda en tarjetas y con un aside lateral de los filtros(categoria, precio, fecha, nombre del evento) y una barra para la paginación de la web.

![img](img/events.JPG)


**La ultima parte** del proyecto es cuando clicas a un evento en particular el cual te sale la información general del cual, nombre, descripción, hora y fecha de inicio y final y el mapa con la ubicación exacta.


![img](img/eventConcret.JPG)




Estructura del projecto
---------------------------

La estructura de nuestro poryecto es la siguiente:
![img](img/estructura.JPG)

Dentro de la carpeta de routes, tenemos las routas de las paginas con sus controladores, su template y su index.js.



Tecnologia usada
-------------------

Para hacer este proyecto hemos usado la siguiente tecnologia:
- HTML5
- SCSS
- BOOTSTRAP
- ANGULAR JS
    + LLAMADA A LA API DE GOOGLE MAPS
    + LLAMADA A LA API DE EVENBRITE
    + LLAMADA A UNA API DE GEOLOCALIZACIÓN


