import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { MDBBtn, MDBCol, MDBRow, MDBContainer } from "mdbreact";
import { TextField, TextArea } from "../../../fields";
// import "./styles.css";
import "../styles.css";

const ParcerSettings = props => {
  const { handleSubmit, isRunning } = props;

  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <Field
        name="parcerLimit"
        component={TextField}
        label={"Limit"}
        group
        type="text"
      />
      <Field
        name="parcerThreshold"
        component={TextField}
        label={"Threshold"}
        group
        type="text"
      />
      <Field
        name="parcerArea"
        component={TextField}
        label={"Area"}
        group
        type="text"
      />
      {isRunning && (
        <MDBBtn className="adminBtn" type="submit">
          STOP
        </MDBBtn>
      )}
      {!isRunning && (
        <MDBBtn className="adminBtnGreen" type="submit">
          RUN
        </MDBBtn>
      )}
    </form>
  );
};

const validate = values => {
  const errors = {};

  if (values && !values.header) {
    errors.header = "Вы не заполнили поле темы сообщения";
  }

  if (values && !values.message) {
    errors.header = "Вы не заполнили поле сообщения";
  }

  return errors;
};

export default reduxForm({
  form: "ParcerSettings",
  validate,
  destroyOnUnmount: false
})(ParcerSettings);
