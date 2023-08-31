import React from "react";

//style
import classes from "./NewItem.module.css";

const NewItem = ({ image, alt, header, desc }) => {
  return (
    <div className={classes.newsItem}>
      <img src={image} alt={alt} />
      <h3>{header}</h3>
      <p>{desc}</p>
      <a href="/c" className="read-more">
        Подробнее
      </a>
    </div>
  );
};

export default NewItem;
