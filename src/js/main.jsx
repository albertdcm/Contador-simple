import React from "react";
import { createRoot } from "react-dom/client";
import { SecondsCounter } from "./components/SecondCounter.jsx";
import "../styles/index.css"; 

const root = createRoot(document.querySelector("#root"));

let seconds = 0;
setInterval(() => {
  root.render(<SecondsCounter seconds={seconds} />);
  seconds++;
}, 1000);