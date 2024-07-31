import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import sunBaby from "../assets/sun-eyes.png";
import blueBaby from "../assets/blue-eyes.png";
import glowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function eyeColorMapper(color) {
  const mapper = {
    blue: blueBaby,
    sun: sunBaby,
    glowing: glowingBaby,
    normal: normalBaby,
  };
  return mapper[color];
}

function roundToOneDP(number) {
  return Math.round(number * 10) / 10;
}

function BabyHog({ name, hobby, eyeColor }) {
  const [weight, setWeight] = useState(
    Math.round((Math.random() * (2 - 1.1) + 1.1) * 10) / 10
  );

  eyeColor = eyeColor ? eyeColor : "normal";
  const mappedImage = eyeColorMapper(eyeColor);

  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    if (e.target.matches('button[name="+"]')) {
      setWeight(roundToOneDP(weight + 0.1));
    } else if (e.target.matches('button[name="-"]')) {
      setWeight(roundToOneDP(weight - 0.1));
    }
  }

  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight: {weight}kg</h3>
      <h3>Hobby: {hobby}</h3>
      <h4>Eye Color: {eyeColor}</h4>

      <button name="+" onClick={handleChangeWeight}>
        Increase Weight
      </button>
      <button name="-" onClick={handleChangeWeight}>
        Decrease Weight
      </button>

      <div className="hb-wrap">
        <img
          src={mappedImage}
          style={{ height: `${weight * 100}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
