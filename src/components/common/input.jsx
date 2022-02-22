import React from "react";
const Input = ({ name, label, value, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type="text"
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
  // handleChange = ({ currentTarget: input }) => {
  //   const errors = { ...this.state.errors };
  //   const errorMessage = this.validateProperty(input);

  //   if (errorMessage) errors[input.name] = errorMessage;
  //   else delete errors[input.name];

  //   const data = { ...this.state.data };
  //   data[input.name] = input.value;
  //   this.setState({ data, errors });
  // };
};

export default Input;
