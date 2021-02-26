import React from "react";
import Counter from "./counter";

//Stateless Functional Component
const Counters = ({
  onReset,
  counters,
  onDelete,
  onIncrement,
  onDecrement,
}) => {
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
          onDecrement={onDecrement}
        ></Counter>
      ))}
    </div>
  );
};

export default Counters;
