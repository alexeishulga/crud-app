import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Form = ({ columns, initialData, onAddData }) => {
  const [personData, setPersonData] = useState(initialData);

  const handelClick = (e) => {
    e.preventDefault();
    onAddData(personData);
  };

  const handleChange = (e) => {
    const data = { ...personData };
    data[e.currentTarget.name] = e.currentTarget.value;
    setPersonData(data);
  };
  console.log(personData);
  return (
    <form>
      {columns.map((columnName) => (
        <Input
          key={columnName}
          name={columnName}
          label={columnName}
          value={personData[columnName]}
          type="input"
          onChange={handleChange}
        />
      ))}
      <Button
        label="Save"
        onClick={(e) => handelClick(e)}
      />
    </form>
  );
};

export default Form;
