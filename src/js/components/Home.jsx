import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Digit } from "./digit.jsx";

const Home = () => {
  const [timer, setTimer] = useState(0);
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(prev => !prev);
  };

  useEffect(() => {
    if (!active) return;

    const interval = setInterval(() => {
      setTimer(value => value + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <main className="text-center">
      <section className="counter-holder">
        <Digit number={<span className="fa fa-clock"></span>} />
        <Digit number={Math.floor(timer / 100000) % 10} />
        <Digit number={Math.floor(timer / 10000) % 10} />
        <Digit number={Math.floor(timer / 1000) % 10} />
        <Digit number={Math.floor(timer / 100) % 10} />
        <Digit number={Math.floor(timer / 10) % 10} />
        <Digit number={timer % 10} />
      </section>

      <button className="toggle-btn" onClick={toggleActive}>
        {active ? "Detener" : "Iniciar"}
      </button>
    </main>
  );
};

export default Home;