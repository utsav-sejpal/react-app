import React, { useState } from "react";

export default function Form() {
  const [value, setValues] = useState({});
  const [error, setError] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    
    if (value.username == "") {
      alert("user name is empty");
      return;
    }

    console.log(value);

    // alert(`The name you entered was: ${name}`);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setValues((values) => ({ ...values, [name]: value }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="username"
            value={value.username || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your age:
          <input
            type="number"
            name="age"
            value={value.age || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
