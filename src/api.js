// Peticiones

// FUNCTION BY TITLE
// Definir funcion searchMoviesByTitle (arg = pelicula)
function searchMoviesByTitle(title) {
  const apiKey = "ee33331b"; // clave API de OMDb
  const apiUrl = `http://www.omdbapi.com/?s=${title}&apikey=${apiKey}`; //Interpolacion.

  return fetch(apiUrl)
    .then(function(response) { 
      return response.json()
    }) 
    .then((data) => {
      if (data.Response === "True") {
         return data.Search;
      } else {
        return [];
      }
    })
    .catch((error) => {
      throw error;
    });
}

// FUNCTION BY ID
function searchMoviesById(ID) {
  const apiKey = "ee33331b"; // Clave API de OMDb
  const apiUrl = `http://www.omdbapi.com/?i=${ID}&apikey=${apiKey}`;

  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True") {
        return data; // Devuelve los datos de una pelicula
      } else {
        throw new Error("No se encontró información para el id:" + ID);
      }
    })
    .catch((error) => {
      throw error; // Lanza el error para que sea capturado por el catch del llamador
    });
}

export { searchMoviesByTitle, searchMoviesById };
