import React from "react";

//style
import classes from "./ContactPage.module.css";

//components
import Form from "../../components/Form/Form";

const ContactPage = () => {
  return (
    <div className={classes.page}>
      <Form />
    </div>
  );
};

export default ContactPage;
