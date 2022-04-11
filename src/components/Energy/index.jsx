import React from "react";
import "./style.css";
import electricityImg from "./img/electricity.svg";
import waterImg from "./img/water.svg";

const Energy = ({ electricity, water }) => {
  return (
    <div className="energy">
      <div className="energy__source">
        <div className="energy__icon">
          <img src={electricityImg} alt="elekttřina ikona" />
        </div>
        <div className="energy__consumption">
          <div className="energy__description">Elektřina</div>
          <div className="energy__value">{electricity} kW</div>
        </div>
      </div>
      <div className="energy__source">
        <div className="energy__icon">
          <img src={waterImg} alt="voda ikona" />
        </div>
        <div className="energy__consumption">
          <div className="energy__description">Voda</div>
          <div className="energy__value">
            {water} m<sup>3</sup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Energy;
