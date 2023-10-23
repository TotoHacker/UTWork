import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Componentes/Home"
import InicioS from "./Componentes/InicioS";
import NewNote from "./Componentes/NoteNew";
import Calendario from "./Componentes/Calendario";
import Nota from "./Componentes/Notas";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/InicioS" element={<InicioS/>}/>
        <Route path="/Nnote" element={<NewNote/>}/>
        <Route path="/Calendar" element={<Calendario/>}/>
        <Route path="/note" element={<Nota/>}/>
      </Routes>
    </div>
  );
};

export default App;