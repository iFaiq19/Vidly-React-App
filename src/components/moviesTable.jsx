import React, { Component } from "react";
import Like from "./common/like";
class MoviesTable extends Component {
  raiseSort(path) {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  }
  render() {
    const { movies, onDelete, onLike } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort("title")}
            >
              Title
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort("genre.name")}
            >
              Genre
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort("numberInStock")}
            >
              Stock
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort("dailyRentalRate")}
            >
              Rate
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td style={{ width: 300 }}>{movie.title}</td>
              <td style={{ width: 200 }}>{movie.genre.name}</td>
              <td style={{ width: 150 }}>{movie.numberInStock}</td>
              <td style={{ width: 150 }}>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onClick={() => onLike(movie)}></Like>
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
