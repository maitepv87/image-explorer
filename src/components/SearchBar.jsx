import { useState } from "react";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header>
      <div>
        <h2>Image Explorer</h2>
      </div>
      <div>
        <input
          type="search"
          placeholder="Search..."
          name="searchTerm"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="button">Search</button>
      </div>
    </header>
  );
};
