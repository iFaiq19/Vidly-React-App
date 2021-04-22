import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovies, saveMovie } from "../services/fakeMovieServices";
import { getGenres } from "../services/fakeGenreServices";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreID: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };
  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreID: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const movieID = this.props.match.params.id;
    if (movieID === "new") return;

    const movie = getMovies(movieID);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreID: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }
  doSubmit() {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  }
  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.doSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreID", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number In Stock", "number")}
          {this.renderInput("dailyRentalRate", "Daily Rental Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
