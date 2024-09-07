import { useMemo, useState } from "react";

const factorial = (n) => {
  console.log("factorial calculation");
  if (n < 0) {
    return NaN;
  }
  if (n == 1 || n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

export const UseMemoComp = () => {
  const [number, setNumber] = useState(5);
  const [counter, setCounter] = useState(0);
  const fact = useMemo(() => factorial(number), [number]);
  return (
    <div>
      <h1>
        Factorial of the {number} is {fact}
      </h1>
      <div>
        <button onClick={() => setCounter(counter + 1)}>increase</button>
      </div>
      <h1>{counter}</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value, 10))}
      />
    </div>
  );
};
