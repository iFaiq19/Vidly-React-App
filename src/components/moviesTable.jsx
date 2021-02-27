import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {key:'like'},
    {key:'delete'},
  ];
  render() {
    const { movies, onDelete, onLike, sortColumn, onSort } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        ></TableHeader>
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
