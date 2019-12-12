// //Create a React app from scratch.
// import React from "react";
// import ReactDOM from "react-dom";

// let date = new Date();
// let currentHour = date.getHours();
// let greeting = greetingFunc();
// let heading;

// function greetingFunc() {
//   if (currentHour >= 24 && currentHour <= 12) {
//     return "Morning";
//   } else if (currentHour >= 12 && currentHour <= 18) {
//     return "Afternoon";
//   } else if (currentHour >= 18 && currentHour <= 24) {
//     return "Night";
//   }
// }

// //Show a single h1 that says "Good morning" if between midnight and 12PM.
// //or "Good Afternoon" if between 12PM and 6PM.
// //or "Good evening" if between 6PM and midnight.
// if (greeting === "Morning") {
//   heading = {
//     color: "red"
//   };
// } else if (greeting === "Afternoon") {
//   heading = {
//     color: "green"
//   };
// } else if (greeting === "Night") {
//   heading = {
//     color: "blue"
//   };
// }

// //Apply the "heading" style in the styles.css
// //Dynamically change the color of the h1 using inline css styles.
// //Morning = red, Afternoon = green, Night = blue.
// ReactDOM.render(
//   <div>
//     <h1 className="heading" style={heading}>
//       Good {greeting}
//     </h1>
//   </div>,
//   document.getElementById("root")
// );

//Alternative Solution
import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
