import React, { useState } from "react";
import "./style.css";
import zapnuto from "./img/light-off.svg";
import vypnuto from "./img/light-on.svg";

const Light = ({ name, state }) => {
  const [lightOn, setLightOn] = useState(state);
  return (
    <div
      className="light"
      onClick={() => {
        lightOn === "on" ? setLightOn("off") : setLightOn("on");
      }}
    >
      <div className="light__icon">
        <img src={lightOn === "off" ? zapnuto : vypnuto} />
      </div>
      <div className="light__name">{name}</div>
    </div>
  );
};

export default Light;
