import http from "./httpService";
import { apiURL } from "../config.json";

const apiEndpoint = `${apiURL}/movies`;

function movieURL(id) {
  return `${apiEndpoint}/${id}`;
}

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(movieURL(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    http.put(movieURL(movie._id), body);
  }

  http.post(apiEndpoint, movie);
}

export function deleteMovie(movieId) {
  return http.delete(movieURL(movieId));
}
