import React from "react";

//components
import LoginForm from "../../components/LoginForm/LoginForm";

//style
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={classes.page}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
