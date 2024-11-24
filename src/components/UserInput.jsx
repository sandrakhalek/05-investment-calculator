import { useState } from "react";
import { Input } from "./Input";

function UserInput({ inputsValues, handleInputChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          label={"Initial Investment"}
          handleInputChange={(event) => handleInputChange(event.target.value, "initialInvestment")}
          value={inputsValues.initialInvestment}
        />
        <Input
          label={"Annual Investment"}
          handleInputChange={(event) => handleInputChange(event.target.value, "annualInvestment")}
          value={inputsValues.annualInvestment}
        />
      </div>
      <div className="input-group">
        <Input
          label={"Expected Return"}
          handleInputChange={(event) => handleInputChange(event.target.value, "expectedReturn")}
          value={inputsValues.expectedReturn}
        />
        <Input
          label={"Duration"}
          handleInputChange={(event) => handleInputChange(event.target.value, "duration")}
          value={inputsValues.duration}
        />
      </div>
    </section>
  );
}

export { UserInput };
