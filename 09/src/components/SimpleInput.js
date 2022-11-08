import React from "react";

const SimpleInput = (props) => {
  return (
    <React.Fragment>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        onChange={props.onChange}
        value={props.value}
        onBlur={props.onBlur}
      />
    </React.Fragment>
  );
};

export default SimpleInput;
