import React, { useState } from "react";
import "./ControlledForm.module.css";

const Controlled: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form className="controlled-form">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type here..."
        className="input-field"
      />
      <button className="submit-button">Submit</button>
    </form>
  );
};

export default Controlled;
