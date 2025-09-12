import { useState } from "react";

export const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <header className="search-header">
      <h2 className="search-title">Image Explorer</h2>

      <form onSubmit={handleFormSubmit} className="search-form">
        <input
          type="search"
          id="searchTerm"
          name="searchTerm"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search images..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </header>
  );
};
