const imgSrc = require("./dual_monitors.jpg");
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./components/App";
const Greeting = ({ name }) => <p className="greet">Hello, {name}!</p>;

ReactDOM.render(<App />, document.getElementById("root"));

// const greeting = 'Hello, Webpack!';
// (() => {
//   const image = document.createElement('img');
//   image.src = imgSrc;
//   image.height = 400;
//   document.body.appendChild(image);
//
//   console.log(greeting);
//   const d = document.createElement('div');
//   d.classList.add('myDiv');
//   d.innerText = greeting;
//   document.body.appendChild(d);
// })();
