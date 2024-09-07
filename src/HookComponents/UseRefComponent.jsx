import { useRef } from "react";

const UseRefComponent = () => {
  const inputRef = useRef(null);
  function buttonClick() {
    inputRef.current.focus();
  }
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={buttonClick}></button>
    </div>
  );
};
export default UseRefComponent;
