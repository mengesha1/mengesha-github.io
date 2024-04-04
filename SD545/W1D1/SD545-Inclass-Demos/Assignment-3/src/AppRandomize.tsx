import React, { useState } from "react";
function App() {
  //Build a component that generates a random number between 1 and 100 when a button is clicked.
  // Display the generated number using useState.
  //state intalization

  const [random, setRandom] = useState<number>(
    Math.floor(Math.random() * 100) + 1
  );

  //event handler
  const clickHandler = () => {
    const newRandom = Math.floor(Math.random() * 100) + 1;
    setRandom(newRandom);
    console.log(newRandom);
  };

  //return statment
  return (
    <>
      <div className="App">
        <div>
          <h2>RandomizeNumber(1-100): {random}</h2>
          <button onClick={clickHandler}>Randomize me</button>
        </div>
      </div>
    </>
  );
}

export default App;
