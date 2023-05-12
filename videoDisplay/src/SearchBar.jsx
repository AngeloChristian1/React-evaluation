import "./All.css";
import search from "./assets/search.svg";

const SearchBar = (props) => {
  return (
    <>
      <div className="search-bar">
        <div className="searchIcon">
          <img src={search} alt="Search" />
        </div>
        <div className="search-bar-input">
          {" "}
          <input type="search" placeholder={props.placeholder}></input>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
