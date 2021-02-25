import React from "react";
import Counter from "./counter";

const Counters = (props) => {
  return (
    <div>
      <button
        onClick={props.onReset}
        className="btn-primary btn btn-sm m-2"
      >
        Reset
      </button>
      {props.counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={props.onDelete}
          onIncrement={props.onIncrement}
        ></Counter>
      ))}
    </div>
  );
};

export default Counters;
