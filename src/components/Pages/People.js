import React, { useState } from "react";
import Table from "../common/Table";
import Form from "../common/Form";

const data = [
  { first: "Mark", last: "Otto", handle: "@motto", id: "1" },
  { first: "Carl", last: "Reno", handle: "@ceno", id: "2" },
  { first: "Steve", last: "Smith", handle: "@ssteve", id: "3" },
];

const columns = Object.keys(data[0]);

const People = () => {
  const [people, setPeople] = useState(data);

  const handleAddPerson = (personData) => {
    const data = [...people, personData];
    setPeople(data);
  };

  const getInitialPeopleData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };

  const deletePeople = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">PeoplePage</h1>
        {people[0] !== undefined ? (
          <>
            <Table
              data={people}
              columns={columns}
              tableDescriptor="People"
              deleteItem={deletePeople}
            />
            <Form
              columns={columns}
              initialData={getInitialPeopleData()}
              onAddData={handleAddPerson}
            />
          </>
        ) : (
          <>
            <h2>No information about people</h2>
            <Form
              columns={columns}
              initialData={getInitialPeopleData()}
              onAddData={handleAddPerson}
            />
          </>
        )}
      </div>
    </>
  );
};

export default People;
