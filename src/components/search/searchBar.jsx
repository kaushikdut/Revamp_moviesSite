import "./searchBar.css";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input placeholder="Search the movies" />
      <CiSearch />
    </div>
  );
};

export default SearchBar;
