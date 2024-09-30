import React from "react";
import "./navbar.css";

import SearchBar from "../search/searchBar";
import { MdFavorite } from "react-icons/md";
import Logo from "../logo/logo";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleFavourite = () => {
    navigate("/favourite");
  };
  return (
    <div className="navbar">
      <Logo />
      <div className="searchBar">
        <SearchBar />
      </div>

      <div className="right" onClick={handleFavourite}>
        <MdFavorite />
      </div>
    </div>
  );
}

export default Navbar;
