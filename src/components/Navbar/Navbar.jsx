import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="row">
        <div className="col-6 text-center">
          <NavLink to="/price">Ціни</NavLink>
        </div>
        <div className="col-6 text-center">
          <NavLink to="/table">Таблиця </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
