import React from "react";

//style
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h2 className={classes.logo}>Maxima</h2>
      <ul className={classes.menu}>
        <li>
          <a href="/">Главная</a>
        </li>
        <li>
          <a href="main">Новости</a>
        </li>
        <li>
          <a href="about">О нас</a>
        </li>
        <li>
          <a href="contact">Контакты</a>
        </li>
        <li>
          <a href="login">Регистрация</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
