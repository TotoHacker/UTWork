import React, { useState } from "react";
import Navbar from "./BarraNav";
import "./IS.css";

const InicioS = () => {
  const [open, setOpen] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log("Iniciando sesión con usuario:", username);
  };

  return (
    <div className="container">
      <div className="navbar">
        <Navbar open={open} toggleNavbar={() => setOpen(!open)} />
      </div>
      <div className="w-full max-w-md p-6 border rounded-md shadow-md bg-white">
        <img src="../Imagenes/UtWork.png" alt="Logo" />
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium">
              Nombre de usuario
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="w-full px-3 py-2 border rounded-full p-2 shadow-sm"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 border rounded-full p-2 shadow-sm"
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white text-sm font-semibold py-2 rounded-md hover:bg-blue-600"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default InicioS;