import React from "react";
import Styles from "./Input.module.css";

function Input({
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  error
}) {
  return (
    <div className={Styles.wrapper}>
      <label htmlFor={name} className={Styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={Styles.input}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={Styles.error}>{error}</p>}
    </div>
  );
}

export default Input;
