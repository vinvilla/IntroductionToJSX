import React from "react";
import ReactDOM from "react-dom";

const fName = "Vin";
const lName = "Villa";
const num = 99;

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);
