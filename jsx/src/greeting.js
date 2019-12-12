//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

let date = new Date();
let currentHour = date.getHours();

function greetingFunc() {
  if (currentHour >= 24 && currentHour <= 12) {
    return "Morning";
  } else if (currentHour >= 12 && currentHour <= 18) {
    return "Afternoon";
  } else if (currentHour >= 18 && currentHour <= 24) {
    return "Night";
  }
}

let greeting = greetingFunc();

ReactDOM.render(
  <div>
    <h1 className="heading">Good {greeting}</h1>
  </div>,
  document.getElementById("root")
);
