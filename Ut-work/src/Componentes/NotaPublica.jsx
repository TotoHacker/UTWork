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
          <div className="bg-red-600 p-4 rounded-lg border border-red-800 shadow-lg w-64 h-64 mt-12 transform hover:scale-105 transition-transform">
            <p className="text-sm"> Class FOSO + </p>
          </div>
          <div className="text-center text-xs text-gray-600">Luis Toto</div>
        </Link>
        <Link to="/Nnote">
          <div className="bg-green-600 p-4 rounded-lg border border-green-800 shadow-lg w-64 h-64 mt-12 transform hover:scale-105 transition-transform">
            <p className="text-sm">APPS WEB + </p>
          </div>
          <div className="text-center text-xs text-gray-600">MichelleMezaa</div>
        </Link>
      </div>

      <div className="space-y-4">
        <Link to="/Nnote">
          <div className="bg-blue-500  p-4 rounded-lg border border-blue-800 shadow-lg w-64 h-64 mt-12 transform hover:scale-105 transition-transform">
            <p className="text-sm"> Class Design + </p>
            <div className="">Hola</div>  
          </div>
          <div className="text-center text-xs text-gray-600">Carlos Garcia 3</div>
        </Link>

        <Link to="/Nnote">
          <div className="bg-yellow-500 p-4 rounded-lg border border-yellow-800 shadow-lg w-64 h-64 mt-12 transform hover:scale-105 transition-transform">
            <p className="text-sm">Nueva Nota + </p>
          </div>
          <div className="text-center text-xs text-gray-600">Toto 4</div>
        </Link>
        </div>
      </section>
    );
  };
  
  export default Home;
  