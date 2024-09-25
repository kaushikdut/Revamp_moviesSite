import React from "react";
import "./navbar.css";

import SearchBar from "../search/searchBar";
import { MdFavorite } from "react-icons/md";
import Logo from "../logo/logo";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-sm">
        <Logo />{" "}
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="right">
        <MdFavorite />
      </div>
    </div>
  );
}

export default Navbar;
