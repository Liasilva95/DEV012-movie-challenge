// Peticiones

// FUNCTION BY TITLE
// Definir funcion searchMoviesByTitle (arg = pelicula)
function searchMoviesByTitle(title) {
  const apiKey = "ee33331b"; // clave API de OMDb
  const apiUrl = `http://www.omdbapi.com/?s=${title}&apikey=${apiKey}`; //Interpolacion.
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True") {
        // Itera a través de los titulos y muestra los detalles de c/película
        data.Search.forEach((movie) => {
          console.log("Titulo:", movie.Title);
          console.log("Año:", movie.Year);
          console.log("Tipo:", movie.Type);
          console.log("ID:", movie.imdbID);
          console.log("Poster:", movie.Poster);
        });
      } else {
        console.log("No se encontró información para la película:", title);
      }
    })
    .catch((error) => {
      console.log("Error al obtener datos de la API:", error);
    });
}

// FUNCTION BY YEAR
function searchMoviesById(ID) {
  const apiKey = "ee33331b"; // Clave API de OMDb
//protocolo(http-https), nombre del dominio, path name(opcional), query params(¿) nombre del parametro=valor.
  const apiUrl = `http://www.omdbapi.com/?i=${ID}&apikey=${apiKey}`; 
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True") {
        console.log("Título:", data.Title);
        console.log("Año:", data.Year);
        console.log("Trama:", data.Plot);
        console.log("Tipo:", data.Type);
        console.log("ID:", data.imdbID);
        console.log("Poster:", data.Poster);
      } else {
        console.log("No se encontró información para el id:", ID);
      }
    })
    .catch((error) => {
      console.error("Error al obtener datos de la API:", error);
    });
}

// Hacer solicitud a la API de OMDb con fetch
// Si la rpta es exitosa (Response === "True"), se muestra informacion sobre la pelicula

export { searchMoviesByTitle, searchMoviesById };
