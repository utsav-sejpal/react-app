import React, { useState } from "react";

export default function SimpleFormValidation() {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name == "") {
      setError(true);
      return;
    }
    setError(false);
    alert("My Name is " + name);
  };

  const handleChange = (event) => {
    setName(() => event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input type="text" name="name" value={name} onChange={handleChange} />
          {error && <small>name is required</small>}
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
