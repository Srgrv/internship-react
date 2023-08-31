import React from "react";

//style
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h2 className={classes.logo}>Maxima</h2>
      <ul className={classes.menu}>
        <li>
          <a href="main">Главная</a>
        </li>
        <li>
          <a href="main">Новости</a>
        </li>
        <li>
          <a href="about">О нас</a>
        </li>
        <li>
          <a href="contacts">Контакты</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
