import React, { useState } from "react";
import {Input, Button } from "antd";
import "../../css/CheckoutForm/CheckoutForm.css"
const CheckoutForm = () => {
  const [values, setValues] = useState("");
  const handleSubmit = (e) => {
    // e.preventDefault();
    // console.log(values)
    alert(",,,,,,,,,,,,,,,,,,,,,")
  };
  const handleChange = (e) => {
      console.log(e.target.value)
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group">
          <label htmlFor="username" className="mb-1">
            User Name
          </label>
          <Input
            type="text"
            className="form-control"
            id="username"
            name="username"
            aria-describedby="emailHelp"
            placeholder="Enter User Name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="email" className="mb-1">
            Email
          </label>
          <Input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            onChange={handleChange}
          />
        </div>

        <Button type="primary" primary="true" className="mt-3">
          Submit
        </Button>
      </form>
    </>
  );
};

export default CheckoutForm;
