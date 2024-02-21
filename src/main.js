import {searchMoviesByTitle, searchMoviesById} from './api.js';


const title = document.querySelector(".searching");
const button = document.querySelector("#doondooneButton");

//searchMoviesByTitle("Inception");
//searchMoviesById("tt3896198");

/*title.addEventListener("change", function(event) {
    const inputValue = event.target.value;
    console.log("El valor introducido es:", inputValue);
    // Llama a la función de búsqueda por título
    const searchResultByTitle = searchMoviesByTitle("Inception");
    // Llama a la función de búsqueda por ID 
    const movieId = "tt3896198";
    const searchResultById = searchMoviesById(movieId);
       // const data = [searchResultByTitle, searchResultById];
     // Verifica si la respuesta es un arreglo
     if (Array.isArray(searchResultByTitle) || Array.isArray(searchResultById)) {
        console.log("La respuesta es un arreglo.");
    } else {
        console.log("La respuesta no es un arreglo.");
    }
}); */
// identificar el titulo y el id
// variables (titulo a buscar) input
// ejecutar mis dos funciones de busqueda. 
// validar cual de las 2 funciones me devuelve un arreglo.
// validar que el objeto sea correcto-- no estar vacio
// mostrar peliculas-- si el paso es correcto.

  title.addEventListener("change", function(event) {
    const inputValue = event.target.value;
    console.log("El valor introducido es:", inputValue);
  
    // Llama a la función de búsqueda por título
    searchMoviesByTitle(inputValue)
      .then((searchResultByTitle) => {
        // Verifica si el resultado es un arreglo
        if (Array.isArray(searchResultByTitle)) {
          console.log("La respuesta es un arreglo.");
        } else {
          console.log("La respuesta no es un arreglo.");
        }
      })
      .catch((error) => {
        console.error("Error al buscar películas por título:", error);
      });
  
  const movieId = inputValue; // Usa el valor ingresado como ID
  searchMoviesById(movieId)
    .then((searchResultById) => {
      // Verifica si el resultado es un objeto
      if (typeof searchResultById === "object" && searchResultById !== null) {
        console.log("La respuesta no es un arreglo.");
      } else {
        console.log("La respuesta es un arreglo.");
      }
    })
    .catch((error) => {
      console.error("Error al buscar películas por ID:", error);
    });
});
