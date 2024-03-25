import React from "react";
import { useContext } from "react";
import { Takeinputcontext } from "../CONTEXT/Takeinputcontext";

function CALCULATE() {
  let { monthlyinvestment, rate, timeperiod, setresult } =
    useContext(Takeinputcontext);

  const per2num = rate / 100;
  const months = timeperiod * 12;
  const monthlyRate = per2num / 12; // Calculate monthly interest rate directly

  const p = monthlyinvestment;
  const m = (
    p *
    ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
    (1 + monthlyRate)
  ).toFixed(2);

  setresult(m);
}

export default CALCULATE;
