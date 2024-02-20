import {searchMoviesByTitle, searchMoviesById} from './api.js';


const title = document.querySelector(".searching");
const button = document.querySelector("#doondooneButton");

//searchMoviesByTitle("Inception");
//searchMoviesById("tt3896198");

title.addEventListener("change", function(event) {
    const inputValue = event.target.value;
    console.log("El valor introducido es:", inputValue);

    // Llama a la función de búsqueda por título
    const searchResultByTitle = searchMoviesByTitle("Inception");

    // Llama a la función de búsqueda por ID 
    const movieId = "tt3896198";
    const searchResultById = searchMoviesById(movieId);

        const data = [searchResultByTitle, searchResultById];
     // Verifica si la respuesta es un arreglo
     const isArrayWithArrays = data.map(item => Array.isArray(item));

    if (isArrayWithArrays[0] === true) {
        console.log("La respuesta es un arreglo.");
    } else {
        console.log("La respuesta no es un arreglo.");
    }
});
// identificar el titulo y el id
// variables (titulo a buscar) input
// ejecutar mis dos funciones de busqueda. 
// validar cual de las 2 funciones me devuelve un arreglo.
// validar que el objeto sea correcto-- no estar vacio
// mostrar peliculas-- si el paso es correcto.