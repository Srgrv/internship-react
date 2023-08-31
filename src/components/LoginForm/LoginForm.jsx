import React from "react";
import { useForm } from "react-hook-form";

//style
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={classes.loginForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.field}>
          <label>
            Фамилия:
            <input
              {...register("Фамилия", {
                required: "Поле обязательно к заполнению",
              })}
            />
          </label>
        </div>
        <div className={classes.field}>
          <label>
            Имя:
            <input
              {...register("Имя", {
                required: "Поле обязательно к заполнению",
              })}
            />
          </label>
        </div>
        <div className={classes.field}>
          <label>
            Отчество:
            <input
              {...register("Отчество", {
                required: "Поле обязательно к заполнению",
              })}
            />
          </label>
        </div>
        <div className={classes.field}>
          <label>
            Телефон:
            <input
              {...register("Телефон", {
                required: "Поле обязательно к заполнению",
              })}
            />
          </label>
        </div>
        <div className={classes.field}>
          <label>
            E-mail:
            <input
              {...register("E-mail", {
                required: "Поле обязательно к заполнению",
              })}
            />
          </label>
        </div>
        <div className={classes.field}>
          <label>
            Логин:
            <input
              {...register("Логин", {
                required: "Поле обязательно к заполнению",
              })}
            />
          </label>
        </div>
        <div className={classes.field}>
          <label>
            Пароль:
            <input
              {...register("Пароль", {
                required: "Поле обязательно к заполнению",
              })}
            />
          </label>
        </div>
        <div className={classes.field}>
          <label>
            Группа пользователя:
            <input
              {...register("Группа пользователя", {
                required: "Поле обязательно к заполнению",
              })}
            />
          </label>
        </div>
        <input type="submit" value="Отправить" />
      </form>
    </div>
  );
};

export default LoginForm;

//Телефон
//  • Email
//  • Логин
//  • Пароль
//  • Группа пользователя
