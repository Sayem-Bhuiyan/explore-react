import { useState } from "react";

const State = () => {
    
  const [count, setCount] = useState(0);

  const add = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const Reduce = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
    }
    else {
        alert("No Negative value")
    }
  };
  return (
    <div className="text-center border-2 p-8">
      <h1 className="text-2xl font-bold m-5">Counter: {count}</h1>
      <button
        onClick={add}
        className="text-xl font-bold border-2 rounded-md px-3 py-3 m-3 bg-green-600 text-white"
      >
        Add
      </button>
      <button
        onClick={Reduce}
        className="text-xl font-bold border-2 rounded-md px-3 py-3 m-3 bg-green-600 text-white"
      >
        Reduce
      </button>
    </div>
  );
};
export default State;
