import React from "react";
import { useSelector } from "react-redux";

//style
import classes from "./Slider.module.css";

//components
import NewItem from "../NewsItem/NewItem";

const Slider = () => {
  const news = useSelector((state) => state.slice.news);
  const offset = useSelector((state) => state.slider.offset);

  const left = { left: `${offset}px` };

  return (
    <div className={classes.slider}>
      <div className={classes.sliderLine} style={left}>
        {news.map((item, index) => {
          return <NewItem key={`${item}_${index}`} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Slider;
