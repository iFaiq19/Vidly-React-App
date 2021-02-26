import React from "react";
import Counter from "./counter";

//Stateless Functional Component
const Counters = ({ onReset, counters, onDelete, onIncrement }) => {
  return (
    <div>
      <button onClick={onReset} className="btn-primary btn btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={onDelete}
          onIncrement={onIncrement}
        ></Counter>
      ))}
    </div>
  );
};

export default Counters;
