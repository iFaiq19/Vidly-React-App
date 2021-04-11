import React from "react";
const movieForm = ({ match, history }) => {
  return (
    <div>
      <h1>Movie Form {match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.replace("/")}
      >Save</button>
    </div>
  );
};

export default movieForm;
