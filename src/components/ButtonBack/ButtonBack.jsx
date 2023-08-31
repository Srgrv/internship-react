import React from "react";
import { useDispatch } from "react-redux";

//reducers
import { BACK_OFFSET } from "../../store/slider";

//style
import classes from "./ButtonBack.module.css";

const ButtonBack = () => {
  const dispatch = useDispatch();

  const setOffset = () => {
    dispatch(BACK_OFFSET());
  };

  return (
    <button className={classes.back} onClick={setOffset}>
      Back
    </button>
  );
};

export default ButtonBack;
