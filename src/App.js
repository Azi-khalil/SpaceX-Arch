import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';

import Rockets from './Rockets'
import NavBar from "./NavBar";
import Launches from "./Launches"

function App() {
  return (
    <div className="App">
     <NavBar />
     <Routes>
       <Route path='/' element={<Rockets />} />
       <Route path='/launches' element={<Launches />} />
     </Routes>
    </div>
  );
}

export default App;
