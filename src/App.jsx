import { useState } from "react";
import { Results } from "./components/Results";
import { UserInput } from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (newValue, inputID) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [inputID]: +newValue };
    });
  };

  const inputIsValid = userInput.duration >= 1;
  return (
    <>
      <UserInput inputsValues={userInput} handleInputChange={handleChange} />
      {inputIsValid && <Results data={userInput} />}
      {!inputIsValid && <p className="center">Please enter a duration greater than 0</p>}
    </>
  );
}

export default App;
