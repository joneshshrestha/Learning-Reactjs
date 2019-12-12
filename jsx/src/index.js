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

// let fname = "Jonesh";
// let lname = "Shrestha";
// ReactDOM.render(
//   <div>
//     <h1>Hello {fname + " " + lname}!</h1>
//     <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
//   </div>,
//   document.getElementById("root")
// );

// let myName = "Jonesh Shrestha";
// let date = new Date();
// let currentYear = date.getFullYear();

// ReactDOM.render(
//   <div>
//     <p>Created by {myName}</p>
//     <p>Copyright {currentYear}.</p>
//   </div>,
//   document.getElementById("root")
// );

// const img = "https://picsum.photos/200";

// ReactDOM.render(
//   <div>
//     <h1 className="heading" contentEditable="true" spellcheck="false">
//       My Favourite Foods
//     </h1>
//     <div>
//       <img src={img + "?greyscale"} alt="random" />
//       <img
//         className="food-img"
//         src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&w=1000&q=80"
//         alt="Pizza"
//       />
//       <img
//         className="food-img"
//         src="https://img.taste.com.au/pJyCJHYS/w720-h480-cfill-q80/taste/2016/11/sticky-bacon-wrapped-sausages-72025-1.jpeg"
//         alt="Bacon wrapped sausages"
//       />
//       <img
//         className="food-img"
//         src="https://5.imimg.com/data5/SD/TP/GLADMIN-37906587/chili-chicken-500x500.png"
//         alt="Chicken Chilli"
//       />
//     </div>
//   </div>,
//   document.getElementById("root")
// );

const customStyle = {
  color: "blue",
  fontSize: "20 px",
  border: "1px solid black"
};

customStyle.color = " ";

ReactDOM.render(
  <h1 style={customStyle}> Hello World!</h1>,
  document.getElementById("root")
);
