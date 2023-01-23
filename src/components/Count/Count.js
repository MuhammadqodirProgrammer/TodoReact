import { useState } from "react";
// hook (ilmoq)  useState va u funcsiya

function Count() {
  let [count, setCount] = useState(0);
  let [val, setVal] = useState("");
  
  function elInput(evt) {
    setVal(evt.target.value);
    console.log(evt.target.value);
  }

  function hendleDecrement() {
    setCount(count - 1);
  }

  function hendleIncrement() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={hendleDecrement}>-</button>
      <strong>{count}</strong>
      <button onClick={hendleIncrement}>+</button>

      <h1>{val}</h1>
      <input type={"text"} onChange={elInput}></input>
    </div>
  );
}
export default Count;
