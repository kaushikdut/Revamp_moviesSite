import { useState } from "react";
import "./searchBar.css";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const onSubmit = () => {
    setSearchValue("");
    navigate(`/search/${searchValue}`);
  };
  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };
  return (
    <div className="search-bar">
      <input
        placeholder="Search the movies"
        value={searchValue}
        onChange={onSearch}
        onKeyDown={onKeyDown}
      />
      <CiSearch onClick={onSubmit} size={30} />
    </div>
  );
};

export default SearchBar;
