import React, { ChangeEvent, useState } from "react";
function App() {
  //state intalization
  
 const [InputValue, setInputValue] = useState<string>("");
 const [fahrenheitValue, setFahrenheitValue] = useState<number | null>(null);
//event handler

  
  //setInputvalue(Inputvalue);
 
  const handleInputBtn = () => {
    // Convert input value to Fahrenheit
    const celsius = parseFloat(InputValue);
    if (!isNaN(celsius)) {
      const fahrenheit = (celsius * 9) / 5 + 32;
      setFahrenheitValue(fahrenheit)//update state
    
    } else {
      setFahrenheitValue(null)
      console.log("Please enter a valid number for Celsius temperature.");
    }
  };
const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
  setInputValue(e.currentTarget.value)
};
  //return statment
  return (
    <>
      <div className="App">
        <div>
          <h2>Enter temperature in Celsius:</h2>
          <input type="number" value={InputValue}onChange={handleChange} />
          <button onClick={handleInputBtn}>Convert to Fahrenheit</button>
        </div>
         {fahrenheitValue !== null && (
          <div>
            <h2>Converted temperature in Fahrenheit:</h2>
          <p>{fahrenheitValue} °F </p>
            </div>
         )}
      </div>
        
    </>
  );
}

export default App;
