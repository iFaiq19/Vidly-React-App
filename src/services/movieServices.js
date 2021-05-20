import http from "./httpService";

export function getMovies() {
  return http.get("http://localhost:3900/api/movies");
}
