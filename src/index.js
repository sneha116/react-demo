import React from "react";
import ReactDOM from "react-dom";
import {useRef, useState} from "react";

function Sum() {
  const num_1Ref = useRef(0);
  const num_2Ref = useRef(0);
  const [Sum, setSum] = useState(0);

  //function to calculate the sum of numbers
  const addNumbers = () => {
    let no1 = parseInt(num_1Ref.current.value);
    let no2 = parseInt(num_2Ref.current.value);
    setSum(no1 + no2);
  };

  return (
    <div>
      <label>
        Enter the first number :
        <input type='number' ref={num_1Ref} />
      </label>
      <br></br>
      <br></br>
      <label>
        Enter the second number :
        <input type='number' ref={num_2Ref} />
      </label>
      <br></br>
      <button onClick={addNumbers}>Add Numbers</button>
      <br></br>
      <p hidden={Sum === 0 ? true : false}>Sum of input numbers: {Sum}</p>
    </div>
  );
}

ReactDOM.render(<Sum />, document.getElementById("root"));
