import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./BarraNav";

const Home = () => {
  const [open, setOpen] = useState(true);

  return (
    <section className="flex gap-6">
      <Navbar open={open} toggleNavbar={() => setOpen(!open)} />
      <div className="m-3 text-xl text-gray-900 font-semibold">UT WORK</div>
      <div className="space-y-4">
        <Link to="/Nnote">
          <div className="bg-red-600 p-4 rounded-lg shadow-lg w-64 h-64 mt-12 transform hover:scale-105 transition-transform">
            <p className="text-sm"> Mis Notas + </p>
          </div>
        </Link>
        <Link to="/Nnote">
        <div className="bg-green-600 p-4 rounded-lg shadow-lg w-64 h-64 mt-12 transform hover:scale-105 transition-transform">
          <p className="text-sm">Notas Publicas + </p>
        </div>
        </Link>
      </div>

      <div className="space-y-4">
  <Link to="/Nnote">
    <div className="bg-blue-500 p-4 rounded-lg shadow-lg w-64 h-64 mt-12 transform hover:scale-105 transition-transform">
      <p className="text-sm">  Nota + </p>
    </div>
  </Link>

  <Link to="/Nnote">
    <div className="bg-yellow-500 p-4 rounded-lg shadow-lg w-64 h-64 mt-12 transform hover:scale-105 transition-transform">
      {/* Contenido del cuadro 2 */}
      <p className="text-sm">Nueva Nota + </p>
    </div>
  </Link>
</div>


    </section>
  );
};

export default Home;
