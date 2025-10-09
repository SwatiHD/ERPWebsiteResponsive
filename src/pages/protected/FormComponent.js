import React from "react";

const FormComponent = () => {
  return (
    <div>
      <h2>Create New Task</h2>
      <form className="h-full w-full">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
