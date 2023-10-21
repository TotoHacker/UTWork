import React, { useState, useEffect } from "react";
import Navbar from "./BarraNav";
import "./IS.css";

const Registro = () => {
    const [open,setOpen]=useState(true);
  const [username, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registrados, setRegistrados] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("registrados"));
    if (data) {
      setRegistrados(data);
    }
  }, []);

  const handleRegistro = () => {
    if (password === confirmPassword) {
      const nuevoRegistro = { username, email, password };
      setRegistrados([...registrados, nuevoRegistro]);
      localStorage.setItem(
        "registrados",
        JSON.stringify([...registrados, nuevoRegistro])
      );
      alert("Registro exitoso");
    } else {
      alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="container">
      <div className="navbar">
        <Navbar open={open} toggleNavbar={() => setOpen(!open)} />
      </div>
      <div className="w-3000px max-w-md p-6 border rounded-md shadow-md bg-white">
        <img src="../Imagenes/UtWork.png" alt="Logo" className="w-40 mx-auto" />
        <h2 className="text-2xl font-semibold mb-4">Registro</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="text-sm font-medium">
              Nombre de usuario
            </label>
            <input
              type="text"
              id="usuario"
              className="w-full px-3 py-2 border rounded-full p-2 shadow-sm"
              placeholder="Nombre o apodo"
              value={username}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-full p-2 shadow-sm"
              placeholder="ejemplo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" // Patrón de correo electrónico válido
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-full p-2 shadow-sm"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium"
            >
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-3 py-2 border rounded-full p-2 shadow-sm"
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            onClick={handleRegistro}
            className="w-full bg-blue-500 text-white text-sm font-semibold py-2 rounded-md hover:bg-blue-600"
          >
            Registrarse
          </button>

          <h2 className="text-2xl font-semibold text-center">
            Registrarse con redes
          </h2>
          <div className="flex justify-center">
            <button className="bg-blue-500 text-white m-2 rounded-full">
              <ion-icon name="logo-facebook"></ion-icon>
            </button>
            <button className="bg-red-500 text-white m-2 rounded-full">
              <ion-icon name="logo-google"></ion-icon>
            </button>
            <button className="bg-pink-500 text-white m-1 rounded-full">
              <ion-icon name="logo-instagram"></ion-icon>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registro;
