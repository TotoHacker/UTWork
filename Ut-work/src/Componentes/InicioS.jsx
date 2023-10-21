import React, { useState } from "react";
import Navbar from "./BarraNav";

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

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    position: "relative",
    zIndex: 1,
    background: "linear-gradient(to bottom, #00f, #0f0)",
  };

  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
  };

  const formContainerStyle = {
    width: "46rem",
    maxWidth: "28.75rem", // max-w-md
    padding: "2.5rem",
    border: "1px solid #e5e7eb", // p-10 border
    borderRadius: "0.375rem", // rounded-md
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
    backgroundColor: "white",
    position: "absolute",
  };

  const imageStyle = {
    width: "10rem", // w-40
    margin: "auto", // mx-auto
  };

  return (
    <div style={containerStyle}>
      <div style={navbarStyle}>
        <Navbar open={open} toggleNavbar={() => setOpen(!open)} />
      </div>
      <div style={formContainerStyle}>
        <img src="../Imagenes/UtWork.png" alt="Logo" style={imageStyle} />
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
