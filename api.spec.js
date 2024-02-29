//import { searchMoviesByTitle, searchMoviesById } from "./src/api";

import { searchMoviesByTitle } from "./api.js";

describe("searchMoviesByTitle", () => {
  // Configura un mock para simular la respuesta de la API
  const mockApiResponse = {
    Response: "True",
    Search: [
      {
        Title: "Movie 1",
        Year: "2022",
        Type: "movie",
        imdbID: "tt1234567",
        Poster: "http://example.com/poster1.jpg",
      },
      // ... más películas simuladas ...
    ],
  };

  beforeEach(() => {
    // Configura un mock para la función fetch
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockApiResponse),
    });
  });

  it("debería llamar a la API con la URL correcta", () => {
    return searchMoviesByTitle("Inception").then(() => {
      expect(fetch).toHaveBeenCalledWith(
        "http://www.omdbapi.com/?s=Inception&apikey=ee33331b"
      );
    });
  });

  it("debería devolver un arreglo de películas cuando la API responde correctamente", () => {
    return searchMoviesByTitle("Inception").then((result) => {
      expect(result).toEqual(mockApiResponse.Search);
    });
  });

  it("debería manejar errores correctamente", () => {
    // Configura el mock para simular un error al invocar la API
    global.fetch.mockRejectedValue(new Error("Error de red"));

    return searchMoviesByTitle("Inception").then((result) => {
      expect(result).toEqual([]);
    });
  });
});
