import React from "react";
import { useDispatch } from "react-redux";

//reducers
import { NEXT_OFFSET } from "../../store/slider";

//style
import classes from "./ButtonNext.module.css";

const ButtonNext = () => {
  const dispatch = useDispatch();

  const setOffset = () => {
    dispatch(NEXT_OFFSET());
  };

  return (
    <button className={classes.next} onClick={setOffset}>
      Next
    </button>
  );
};

export default ButtonNext;
