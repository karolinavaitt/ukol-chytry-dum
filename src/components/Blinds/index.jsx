import React, { useState } from "react";
import "./style.css";
import blindsClosed from "./img/blinds-closed.svg";
import blindsOpen from "./img/blinds-open.svg";

const Blinds = ({ state }) => {
  const [blindsOn, setBlindsON] = useState(state);
  return (
    <div className="blinds">
      <div className="blinds__icon">
        <img src={blindsOn === "open" ? blindsOpen : blindsClosed} />
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__controls">
        <button
          className={blindsOn === "open" ? "button button--active" : "button"}
          onClick={() => setBlindsON("open")}
        >
          Otevřeno
        </button>
        <button
          className={blindsOn === "closed" ? "button button--active" : "button"}
          onClick={() => setBlindsON("closed")}
        >
          Zavřeno
        </button>
      </div>
    </div>
  );
};

export default Blinds;
