import React, { Component } from "react";
import Like from "./common/like";
class MoviesTable extends Component {
  render() {
    const { movies, onDelete, onLike, onSort } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th style={{ cursor: "pointer" }} onClick={() => onSort("title")}>
              Title
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => onSort("genre.name")}
            >
              Genre
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => onSort("numberInStock")}
            >
              Stock
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => onSort("dailyRentalRate")}
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
