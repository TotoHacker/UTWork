import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./BarraNav";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const YourComponent = () => {
  const [open, setOpen] = useState(true);

  return (
    <section className="flex gap-6">
      <Navbar open={open} toggleNavbar={() => setOpen(!open)} />
      <div className="m-3 text-xl text-gray-900 font-semibold">UT WORK</div>


      <div className="card-deck">
        <Link to="/Nnote">
          <div className="card bg-danger  p-4 text-white 4 rounded-lg  w-64 h-64 mt-10 transform hover:scale-105 transition-transform">
            <div className="card-body">
              <p className="card-text">APPS WEB +</p>
            </div>
            <div className="card-footer text-center text-black bg-white"> {/* Usa bg-white para el fondo blanco */}
      Luis Balcazar
    </div>
    </div>
        </Link>

        <Link to="/Nnote">
          <div className="card bg-success p-4 text-white 4 rounded-lg shadow-lg w-64 h-64 mt-12 transform hover:scale-105 transition-transform">
            <div className="card-body">
              <p className="card-text">APPS WEB +</p>
            </div>
            <div className="card-footer text-center text-black bg-white">Michelle Mezaa</div>
          </div>
        </Link>
        </div>
        <div className="space-y-4"></div>

        <Link to="/Nnote">
          <div className="card bg-primary p-4 text-white  4 rounded-lg shadow-lg w-64 h-64 mt-12 transform hover:scale-105 transition-transform">
            <div className="card-body">
              <p className="card-text">APPS WEB +</p>
            </div>
            <div className="card-footer text-center text-black bg-white ">Carlos Garcia </div>
          </div>
        </Link>
        <div className="space-y-4"></div>
        <Link to="/Nnote">
          <div className="card bg-warning p-4 text-white  4 rounded-lg shadow-lg w-64 h-64 mt-12 transform hover:scale-105 transition-transform">
            <div className="card-body">
              <p className="card-text">APPS WEB +</p>
            </div>
            <div className="card-footer text-center text-black bg-white">Antonio C</div>
          </div>
        </Link>
        <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
           Categorias
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } block px-4 py-2 text-sm`}
                  >
                   CLASE PHP
                  </a>
                )}
              </Menu.Item>
              {/* ... Otros elementos del menú ... */}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </section>

  );
};

export default YourComponent;