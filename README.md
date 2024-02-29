# Movie Challenge

## Índice

- [1. Preámbulo](#1-preambulo)
- [2. Resumen del proyecto](#2-resumen-del-proyecto)
- [3. Consideraciones técnicas](#3-consideraciones-tecnicas)
- [4. Prototipo de baja y alta fidelidad](#4-prototipo-de-baja-y-alta-fidelidad)
- [5. Historias de usuario](#5-historias-de-usuario)

---

## 1. Preámbulo

La manera en que vemos películas ha cambiado radicalmente durante los últimos
años debido, en parte, a la aparición de los servicios de
[_streaming_](https://es.wikipedia.org/wiki/Streaming) que nos permiten hacerlo
desde donde estemos y en cualquier momento. El mejor reflejo de este fenómeno es
el éxito de Netflix, HBO y Disney+, etc.

En tiempos en los que una de las principales herramientas para combatir
[la pandemia de Covid-19](https://es.wikipedia.org/wiki/COVID-19) es
[evitar](https://es.wikipedia.org/wiki/Distanciamiento_social) compartir
espacios con muchas personas (como en el cine), ver películas por _streaming_
será una de las pocas maneras de hacerlo (¿o la única?).

Creemos que hay una gran oportunidad de proponer productos/experiencias
innovadoras de todo tipo utilizando datos de películas (directorxs, actorxs,
sagas, secuelas, fechas, etc.). Podríamos pensar en juegos, comunidades,
catálogos, recomendaciones basadas en gustos personales, etc. (sólo por
mencionar algunas ideas obvias).

![Pelis](https://live.staticflickr.com/117/257368762_38bf6fcf9f_h.jpg)

## 2. Resumen del proyecto

El problema que estamos resolviendo con nuestro producto es la búsqueda y visualización de información sobre películas. Muchas veces, los usuarios desean encontrar detalles sobre una película específica o descubrir nuevas películas para ver. Nuestro producto proporciona una solución fácil de usar y completa para esta necesidad.

Búsqueda Eficiente de Películas: Nuestro producto permite a los usuarios buscar películas tanto por título como por ID. Esto significa que los usuarios pueden encontrar películas de varias formas, ya sea buscando un título específico que ya conocen o buscando por un ID particular.

Acceso a Detalles Relevantes: Utilizamos datos de la API de OMDB para obtener detalles precisos sobre cada película. Esto incluye información como el año de lanzamiento, género, trama y póster. Al proporcionar estos detalles, ayudamos a los usuarios a tomar decisiones informadas sobre qué películas ver.

Experiencia de Usuario Intuitiva: Diseñamos nuestra interfaz de usuario de manera que sea fácil de entender y de usar. Los usuarios simplemente ingresan el título de la película que desean buscar o hacen clic en el botón de búsqueda. Luego, presentamos los resultados de manera clara y concisa para que puedan encontrar rápidamente lo que están buscando.

Desarrollo Centrado en Pruebas: Adoptamos un enfoque de desarrollo centrado en pruebas, lo que significa que escribimos pruebas unitarias antes de implementar la funcionalidad. Esto garantiza que nuestro producto funcione de manera confiable y que cualquier cambio que realicemos en el futuro no cause problemas inesperados.

Flexibilidad Tecnológica: Nuestro producto es agnóstico en cuanto a la tecnología utilizada. Esto significa que podemos desarrollarlo en cualquier tecnología que elijamos, ya sea JavaScript vanilla o algún framework o biblioteca como React o Vue.js. Esto nos brinda la libertad de utilizar las herramientas que consideremos más adecuadas para nuestras necesidades y habilidades.

En resumen, nuestro producto resuelve el problema de búsqueda y visualización de información sobre películas al proporcionar una experiencia de usuario intuitiva, acceso a detalles relevantes y un enfoque de desarrollo centrado en pruebas para garantizar la fiabilidad y la flexibilidad tecnológica para adaptarnos a las necesidades cambiantes del proyecto.

## 3. Consideraciones técnicas

- Para poder usar la API de OMDB se crea una llave (_key_) de acceso y
  agrega a cada petición que se hace al servidor (revisar sección _Usage_ de su
  [sitio web](http://www.omdbapi.com/)), la llave se genera en este
  [link](http://www.omdbapi.com/apikey.aspx) llenando el formulario con la
  versión gratuita (_free_) seleccionada y luego revisando el _email_ para
  activarla y poder usarla.
- GitHub Pages sirve sus páginas con un certificado
  [SSL](https://es.wikipedia.org/wiki/Seguridad_de_la_capa_de_transporte) por lo
  que las peticiones a la OMDB deben incluir `https` en la URL.
- Se tiene un máximo de 1.000 peticiones diarias a la API de la OMDB
  por cada [IP](https://es.wikipedia.org/wiki/Direcci%C3%B3n_IP), es
  suficiente.

## 4. Prototipo de baja y alta fidelidad

![Prototipo de baja fidelidad](./src/IMG%20README/BAJA%20FIDELIDAD.png)
![Prototipo de alta fidelidad](./src/IMG%20README/ALTA%20FIDELIDAD.png)
![Esquema de colores de referencia para idear la interfaz del usuario](./src/IMG%20README/ESQUEMA%20DE%20COLORES.png)

## 5. Historias de usuario

1. Como usuaria debo poder buscar películas a través de su TÍTULO con una palabra en el buscador, y me devolverá el titulo, año y poster de las películas que encuentre.
2. Como usuaria debo poder buscar películas por su ID introduciendo en el buscador y me devuelva en la interfaz el titulo, genero, año, trama y poster de la película.

Diviertete e ingresa tu titulo o ID de tu pelicula favorita y explora nuestro buscador. ¡a empezar esta aventura 🎬!
