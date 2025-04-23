import React from "react";
import { Digit } from "./Digit.jsx";

export const SecondsCounter = ({ seconds }) => {
  return (
    <section className="counter-holder">
      <Digit number={<span className="fa fa-clock"></span>} />
      <Digit number={Math.floor(seconds / 100000) % 10} />
      <Digit number={Math.floor(seconds / 10000) % 10} />
      <Digit number={Math.floor(seconds / 1000) % 10} />
      <Digit number={Math.floor(seconds / 100) % 10} />
      <Digit number={Math.floor(seconds / 10) % 10} />
      <Digit number={seconds % 10} />
    </section>
  );
};