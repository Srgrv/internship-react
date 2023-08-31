import React from "react";
import { useForm } from "react-hook-form";

//slyle
import classes from "./Form.module.css";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className={classes.form}>
      <h2>Обратная связь</h2>
      <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.field}>
          <label>
            Name{" "}
            <input
              {...register("name", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 5,
                  message: "Имя должно быть не короче 5 символов",
                },
              })}
            />
          </label>
          <div style={{ height: 40 }}>
            {errors?.name && <p>{errors?.name?.message || "Errors"}</p>}
          </div>
        </div>

        <div className={classes.field}>
          <label>
            Email <input {...register("email")} />
          </label>
        </div>
        <input type="submit" value="Отправить" />
      </form>
    </div>
  );
};

export default Form;
