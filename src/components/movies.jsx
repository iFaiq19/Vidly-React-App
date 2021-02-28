import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieServices";
import { getGenres } from "../services/fakeGenreServices";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import paginate from "../utils/paginate";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    selectedGenre: "Action",
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

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
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      movies: newMovies,
      selectedGenre,
      sortColumn,
    } = this.state;
    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? newMovies.filter((m) => m.genre._id === selectedGenre._id)
        : newMovies;

    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    const movies = paginate(sortedMovies, currentPage, pageSize);
    return { totalCount: filteredMovies.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      genres,
      selectedGenre,
      sortColumn,
    } = this.state;
    if (count === 0)
      return <p className="m-2">There are no movies in the database</p>;

    const { totalCount, data } = this.getPagedData();
    return (
      <div className="container row mt-2">
        <div className="col-2 mt-3">
          <ListGroup
            items={genres}
            onGenreSelect={this.handleGenre}
            selectedGenre={selectedGenre}
          ></ListGroup>
        </div>
        <div className="col">
          <p className="m-2">Showing {totalCount} movies</p>
          <MoviesTable
            movies={data}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          ></MoviesTable>
          <Pagination
            itemsCount={totalCount}
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
