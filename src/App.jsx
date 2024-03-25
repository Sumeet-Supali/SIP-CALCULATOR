import React from "react";
import NAVBAR from "./components/NAVBAR";
import TAKEINPUT from "./components/TAKEINPUT";
import { Takeinputcontext } from "./CONTEXT/Takeinputcontext";

import { useContext, useState } from "react";
import CALCULATE from "./components/CALCULATE";
import DISPLAY from "./components/DISPLAY";
import FOOTER from "./components/FOOTER";

import "./App.css";

function App() {
  let [monthlyinvestment, setmonthlyinvestment] = useState(0);
  let [rate, setrate] = useState(0);
  let [timeperiod, settimeperiod] = useState(0);
  let [result, setresult] = useState(0);
  let [dark, setdark] = useState(false);

  return (
    <React.Fragment>
      <NAVBAR dark={dark} setdark={setdark} />

      <div className={!dark ? "dark-mode" : "light-mode"}>
        <Takeinputcontext.Provider
          value={{
            monthlyinvestment,
            setmonthlyinvestment,
            rate,
            setrate,
            timeperiod,
            settimeperiod,
            result,
            setresult,
          }}
        >
          <TAKEINPUT />
          <CALCULATE />
          <DISPLAY />
        </Takeinputcontext.Provider>
      </div>

      <FOOTER />
    </React.Fragment>
  );
}

export default App;
