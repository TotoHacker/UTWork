import React, { useState } from "react";
import Navbar from "./BarraNav";

const NewNote = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Navbar open={open} toggleNavbar={() => setOpen(!open)} />
      <div className="w-full">
        <div className="w-1/2 ml-auto">
        <input
            type="text"
            className="w-36 h-8 border rounded p-2 top-10 absolute"
            placeholder="Escribe tu nota"
          />

        </div>
      </div>
    </>
  );
};

export default NewNote;
