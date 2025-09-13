import "./App.css";
import { SearchBar, ImageGrid } from "./components";
import { searchImages } from "./api/api";
import { useState } from "react";

function App() {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmit = async (searchTerm) => {
    const trimmedTerm = searchTerm.trim();
    if (!trimmedTerm) return;

    setIsLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const response = await searchImages(searchTerm);
      setImages(response);
    } catch (error) {
      console.error("Error fetching images:", error);
      setError("Something went wrong while fetching images.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />

      {isLoading && hasSearched && <p className="loading">Loading images...</p>}

      {error && hasSearched && <p className="error">{error}</p>}

      {images && images.length > 0 && <ImageGrid images={images} />}

      {images && images.length === 0 && !isLoading && !error && hasSearched && (
        <p>No images found for your search.</p>
      )}
    </>
  );
}

export default App;
