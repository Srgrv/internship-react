//style
import classes from "./App.module.css";

//components
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";

import ButtonBack from "./components/ButtonBack/ButtonBack";
import ButtonNext from "./components/ButtonNext/ButtonNext";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Slider />
        <div className={classes.button}>
          <ButtonBack />
          <ButtonNext />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
