import React, { useContext } from "react";
import "./DISPLAY.css";
import money from "../assets/money.webp";
import { Takeinputcontext } from "../CONTEXT/Takeinputcontext";
function DISPLAY() {
  let {
    monthlyinvestment,

    timeperiod,

    result,
  } = useContext(Takeinputcontext);

  if (isNaN(parseFloat(result))) {
    result = 0;
  }

  let months = timeperiod * 12;
  let invamt = monthlyinvestment * months;
  let estret = (result - invamt).toFixed(2);
  let total = (Number(invamt) + Number(estret)).toFixed(2);
  return (
    <div className="display">
      <div className="child1">
        <div className="child">
          <h3>Invest Amount {"-> ₹"}</h3>
          <h2>{invamt}</h2>
        </div>

        <div className="child">
          <h3>Est. returns{"->₹"}</h3>
          <h2>{estret}</h2>
        </div>

        <div className="child">
          <h3>Total value Amounts{"->₹"}</h3>
          <h2>{total}</h2>
        </div>
      </div>
      <div className="child2">
        <img src={money} alt="" />
      </div>
    </div>
  );
}

export default DISPLAY;
