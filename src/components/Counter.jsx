import { useEffect, useState } from "react";

export const Counter = () => {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const printing = () => {
    console.log(count);
  };

  return (
    <div className="counter-container flex flex-col">
      <h1>{count}</h1>
      <div className="flex ">
        <button onClick={increment} className="btn">
          increment
        </button>
        <button onClick={decrement} className="btn">
          decrement
        </button>
      </div>
    </div>
  );
};
