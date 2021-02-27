import React, { Component } from "react";
import { getMovies } from "../servicesNR/fakeMovieServices";
import { getGenres } from "../servicesNR/fakeGenreServices";
import Like from "./common/like";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import paginate from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
    genres: getGenres(),
    selectedGenre: "Action",
  };

  handleDelete = (movie) => {
    const newMovies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: newMovies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenre = (genre) => {
    this.setState({ selectedGenre: genre });
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies, genres, selectedGenre } = this.state;
    if (count === 0)
      return <p className="m-2">There are no movies in the database</p>;


    const filteredMovies = selectedGenre ? movies.filter(m=>m.genre._id === selectedGenre._id) : movies  
    const newMovies = paginate(filteredMovies, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genres}
            onGenreSelect={this.handleGenre}
            selectedGenre={selectedGenre}
          ></ListGroup>
        </div>
        <div className="col">
          <p className="m-2">Showing {filteredMovies.length} movies</p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {newMovies.map((movie) => (
                <tr key={movie._id}>
                  <td style={{ width: 300 }}>{movie.title}</td>
                  <td style={{ width: 200 }}>{movie.genre.name}</td>
                  <td style={{ width: 150 }}>{movie.numberInStock}</td>
                  <td style={{ width: 150 }}>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onLike={() => this.handleLike(movie)}
                    ></Like>
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={filteredMovies.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          ></Pagination>
        </div>
      </div>
    );
  }
}

export default Movies;
