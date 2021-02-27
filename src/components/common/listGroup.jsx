import React from "react";

const ListGroup = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    onGenreSelect,
    selectedGenre,
  } = props;
  return (
    <ul className="list-group">
      {/* <li className="list-group-item">
        <a href="#">All Genre</a>
      </li> */}
      {items.map((item) => (
        <li
          onClick={() => onGenreSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
          style={{ cursor: "pointer" }}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
