import React from "react";
import "./navbar.css";

import SearchBar from "../search-bar/searchBar";
import { MdFavorite } from "react-icons/md";
import Logo from "../logo/logo";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isFavourite = window.location.pathname
    .replace("/", "")
    .includes("favourite");

  const handleFavourite = () => {
    navigate("/favourite");
  };

  return (
    <div className="navbar">
      <Logo />
      <div className="searchBar">
        <SearchBar />
      </div>

      <div style={{ cursor: "pointer" }} onClick={handleFavourite}>
        <MdFavorite fill={isFavourite ? "red" : "white"} size={30} />
      </div>
    </div>
  );
}

export default Navbar;
