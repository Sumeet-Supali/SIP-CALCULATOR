import React, { useContext, useState } from "react";
import "./TAKEINPUT.css";
import { Takeinputcontext } from "../CONTEXT/Takeinputcontext";

function TAKEINPUT() {
  {
    /* states */
  }
  let {
    monthlyinvestment,
    setmonthlyinvestment,
    rate,
    setrate,
    timeperiod,
    settimeperiod,
  } = useContext(Takeinputcontext);
  {
    /* handlers*/
  }
  let handlemonthlyinvestment = (e) => {
    setmonthlyinvestment(e.target.value);
  };

  let handlerate = (e) => {
    setrate(e.target.value);
  };

  let handletimeperiod = (e) => {
    settimeperiod(e.target.value);
  };

  return (
    <div className="input-content">
      <h1 className="heading">SIP Calculator</h1>
      <div className="monthly-investment">
        <label>Monthly investment</label>
        <div className="monthly-investment-rightcontent">
          <p>₹</p>
          <input
            max="1000000"
            type="number"
            value={monthlyinvestment}
            onChange={(e) => {
              const value = e.target.value;
              if (value >= 0) {
                setmonthlyinvestment(value);
              }
            }}
          />
        </div>
      </div>
      <input
        className="slider"
        type="range"
        min="0"
        max="1000000"
        step="500"
        onChange={handlemonthlyinvestment}
      />

      {/* make slider here */}
      <div className="rate">
        <label>Expected return rate(p.a)</label>
        <div className="rate-rightcontent">
          <input
            type="number"
            max="30"
            value={rate}
            onChange={(e) => {
              const value = e.target.value;
              if (value >= 0) {
                setrate(value);
              }
            }}
          />
          <p>%</p>
        </div>
      </div>
      <input
        className="slider"
        type="range"
        min="0"
        max="30"
        step="1"
        onChange={handlerate}
        defaultValue={0}
      />
      {/* make slider here */}
      <div className="timeperiod">
        <label>Time Period</label>
        <div className="timeperiod-rightcontent">
          <input
            type="number"
            max="40"
            value={timeperiod}
            onChange={(e) => {
              const value = e.target.value;
              if (value >= 0) {
                settimeperiod(value);
              }
            }}
          />
          <p>Yr</p>
        </div>
      </div>
      <input
        type="range"
        min="0"
        className="slider"
        max="40"
        step="1"
        onChange={handletimeperiod}
        defaultValue={0}
      />
      {/* make slider here */}
    </div>
  );
}

export default TAKEINPUT;
