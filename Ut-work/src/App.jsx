import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Componentes/Home"
import InicioS from "./Componentes/InicioS";
import NewNote from "./Componentes/NoteNew";
import Calendario from "./Componentes/Calendario";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/InicioS" element={<InicioS/>}/>
        <Route path="/Nnote" element={<NewNote/>}/>
        <Route path="/Calendar" element={<Calendario/>}/>
      </Routes>
    </div>
  );
};

export default App;