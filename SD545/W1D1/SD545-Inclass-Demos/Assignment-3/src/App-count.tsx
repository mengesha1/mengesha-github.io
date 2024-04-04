import React, { useState } from "react";

function App() {
  //state intalization
  const [count, setCount] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(10);
  //event handler
  const clickHandler = () => {
    setCount((prevcount) => prevcount + 1);
    console.log(count);
  };

  const clickHandler1 = () => {
    setDiscount((prevdiscount) => prevdiscount - 1);
    console.log(discount);
  };
  //return statment
  return (
    <>
      <div className="App">
        <div>
          <h2>Count: {count}</h2>
          <button onClick={clickHandler}>Increment me</button>
        </div>

        <div>
          <h2>DCount: {discount}</h2>
          <button onClick={clickHandler1}>Decrease me me</button>
        </div>
      </div>
    </>
  );
}

export default App;
