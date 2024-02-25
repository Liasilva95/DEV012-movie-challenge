import {searchMoviesByTitle, searchMoviesById} from './api.js';

const title = document.querySelector(".searching");
const button = document.querySelector("#doondooneButton");

//searchMoviesByTitle("Inception");
//searchMoviesById("tt1287845");

/*title.addEventListener("change", function(event) {
    const inputValue = event.target.value;
    console.log("El valor introducido es:", inputValue);
    // Llama a la función de búsqueda por título
    const searchResultByTitle = searchMoviesByTitle("Inception");
    // Llama a la función de búsqueda por ID 
    const movieId = "tt1287845";
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

  title.addEventListener("input", function(event) {
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

    if (inputValue.length === 0) {
        console.log('El campo de entrada está vacío.');
    }
});

const searchResultsElement = document.getElementById("search-results");

title.addEventListener("input", function(event) {
  const inputValue = event.target.value;
  console.log("El valor introducido es:", inputValue);

  searchMoviesByTitle(inputValue)
    .then((searchResults) => {
      // Limpia los resultados anteriores antes de mostrar los nuevos
      searchResultsElement.innerHTML = "";

      searchResults.forEach((movie) => {
        const movieElement = document.createElement("div");
        movieElement.innerHTML = `
          <h2>${movie.Title}</h2>
          <p>${movie.Year}</p>
          <img src="${movie.Poster}" alt="${movie.Title} Poster">
        `;
        searchResultsElement.appendChild(movieElement);
      });
    })
    .catch((error) => {
      console.error("Error al buscar películas por título:", error);
    });

const movieId = inputValue; // Reemplaza con el ID de la película deseada

searchMoviesById(movieId)
  .then((movieDetails) => {
    searchResultsElement.innerHTML = ""; // Limpia resultados anteriores antes de mostrar los nuevos

   const movieElement = document.createElement("div");
   movieElement.innerHTML = `
      <h2>${movieDetails.Title}</h2>
      <p>Year: ${movieDetails.Year}</p>
      <p>Genre: ${movieDetails.Genre}</p>
      <p>Plot: ${movieDetails.Plot}</p>
      <img src="${movieDetails.Poster}" alt="${movieDetails.Title} Poster">
   `
   searchResultsElement.appendChild(movieElement);
  })
  .catch((error) => {
    console.error("Error al buscar película por ID:", error);
  });
});

