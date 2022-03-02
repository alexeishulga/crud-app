import React, { useState } from "react";
import Navigation from "./components/common/Navigation";
import { Routes, Route, Navigate} from "react-router-dom";
import People from "./components/Pages/People";
import Planets from "./components/Pages/Planets";
import Startships from "./components/Pages/Starships";
import NotFound from "./components/Pages/NotFound";

import "bootstrap/dist/css/bootstrap.css";



function App() {
  

  return (
    <>
      <Navigation />
        <Routes>
          <Route exact path="/" element={<People/>}/>
          <Route path="/planets" element={<Planets/>}/>
          <Route path="/starships" element={<Startships/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </>
  );
}

export default App;
