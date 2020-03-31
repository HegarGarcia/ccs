import React from "react";
import PropTypes from "prop-types";
import { camelCase } from "lodash";
import { Field } from "../styles";

export function NumberField({ label, ...inputProps }) {
  const name = camelCase(label);
  return (
    <Field>
      <label htmlFor={name}>{label}</label>
      <input type='number' name={name} {...inputProps} />
    </Field>
  );
}

NumberField.propTypes = {
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  value: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired
};
