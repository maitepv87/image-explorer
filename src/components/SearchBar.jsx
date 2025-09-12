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
    <header>
      <div>
        <h2>Image Explorer</h2>
      </div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            type="search"
            placeholder="Search..."
            name="searchTerm"
            value={searchTerm}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  );
};
