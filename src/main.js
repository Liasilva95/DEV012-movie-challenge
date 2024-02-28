import { searchMoviesByTitle, searchMoviesById } from "./api.js";

const title = document.querySelector(".searching");
const button = document.querySelector("#doondooneButton");
let movieId;

title.addEventListener("input", function (event) {
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

button.addEventListener("click", function () {
  const inputValue = title.value.trim(); // Obtener el valor del campo y eliminar espacios en blanco al principio y al final

  if (inputValue === "") {
    alert("El campo no puede estar vacío."); // Mostrar alerta si el campo está vacío
    title.focus(); // Hacer foco en el campo para que el usuario pueda ingresar datos
  }
});

const searchResultsElement = document.getElementById("search-results");

title.addEventListener("input", function (event) {
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

  movieId = inputValue; // Reemplaza con el ID de la película deseada

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
   `;
      searchResultsElement.appendChild(movieElement);
    })
    .catch((error) => {
      console.error("Error al buscar película por ID:", error);
    });
});

//searchMoviesByTitle("Inception");
//searchMoviesById("tt1287845");

// identificar el titulo y el id
// variables (titulo a buscar) input
// ejecutar mis dos funciones de busqueda.
// validar cual de las 2 funciones me devuelve un arreglo.
// validar que el objeto sea correcto-- no estar vacio
// mostrar peliculas-- si el paso es correcto.
