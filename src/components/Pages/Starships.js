import React, { useState } from "react";
import Table from "../common/Table";
import Form from "../common/Form";

const data = [
  { first: "MercuryXSPACE", year: "2030", handle: "@MercuryXSPAC", id: "1" },
  { first: "VenusXSPACE", year: "2031", handle: "@VenusXSPAC", id: "2" },
  { first: "EarthXSPACE", year: "2032", handle: "@EarthXSPAC", id: "3" },
];

const columns = Object.keys(data[0]);

const Starships = () => {
  const [starships, setStarships] = useState(data);

  const handleAddStarships = (starshipsData) => {
    const data = [...starships, starshipsData];
    setStarships(data);
  };

  const getInitialStarshipsData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };

  const deleteStarships = (id) => {
    setStarships(starships.filter((starship) => starship.id !== id));
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">StarshipsPage</h1>
        {starships[0] !== undefined ? (
          <>
            <Table
              data={starships}
              columns={columns}
              tableDescriptor="Starships"
              deleteItem={deleteStarships}
            />
            <Form
              columns={columns}
              initialData={getInitialStarshipsData()}
              onAddData={handleAddStarships}
            />
          </>
        ) : (
          <>
            <h2>No information about starships</h2>
            <Form
              columns={columns}
              initialData={getInitialStarshipsData()}
              onAddData={handleAddStarships}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Starships;
