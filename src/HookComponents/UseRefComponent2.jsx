import { useState, useRef } from "react";

const UseRefComponent2 = () => {
  const [count, setCount] = useState(0);
  const [render, setRender] = useState(0);
  const renderCount = useRef(0);
  renderCount.current++;
  return (
    <div>
      <h1>Count {count}</h1>
      <h2>Component rendered {renderCount.current} times</h2>
      <button onClick={() => setCount(count + 1)}></button>
    </div>
  );
};
