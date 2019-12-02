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

let name = "Jonesh";
let luckyNumber = 10;
ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
