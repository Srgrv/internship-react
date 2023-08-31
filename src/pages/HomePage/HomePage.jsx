import React from "react";

//style
import classes from "./HomePage.module.css";

//components

import Slider from "../../components/Slider/Slider";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import ButtonNext from "../../components/ButtonNext/ButtonNext";

function App() {
  return (
    <div>
      <div>
        <Slider />
        <div className={classes.button}>
          <ButtonBack />
          <ButtonNext />
        </div>
      </div>
    </div>
  );
}

export default App;
