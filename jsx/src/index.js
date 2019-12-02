import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(
//   <div>
//     <h1>My Favorite Foods</h1>
//     <ul>
//       <li>Bacon</li>
//       <li>Noodles</li>
//       <li>Cheese</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

let fname = "Jonesh";
let lname = "Shrestha";
ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
