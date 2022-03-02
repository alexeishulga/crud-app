import React, { useState } from "react";
import Table from "../common/Table";
import Form from "../common/Form";

const data = [
  { first: "Mercury", size: "1x", handle: "@Mercury", id: "1" },
  { first: "Venus", size: "2x", handle: "@Venus", id: "2" },
  { first: "Earth", size: "3x", handle: "@Earth", id: "3" },
];

const columns = Object.keys(data[0]);

const Planets = () => {
  const [planets, setPlanets] = useState(data);

  const handleAddPlanets = (planetData) => {
    const data = [...planets, planetData];
    setPlanets(data);
  };

  const getInitialPlanetsData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };

  const deletePlanets = (id) => {
    setPlanets(planets.filter((planet) => planet.id !== id));
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">PlanetsPage</h1>
        {planets[0] !== undefined ? (
          <>
            <Table
              data={planets}
              columns={columns}
              tableDescriptor="Planets"
              deleteItem={deletePlanets}
            />
            <Form
              columns={columns}
              initialData={getInitialPlanetsData()}
              onAddData={handleAddPlanets}
            />
          </>
        ) : (
          <>
            <h2>No information about planets</h2>
            <Form
              columns={columns}
              initialData={getInitialPlanetsData()}
              onAddData={handleAddPlanets}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Planets;
