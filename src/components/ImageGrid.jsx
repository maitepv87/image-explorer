import { ImageCard } from "./ImageCard";

export const ImageGrid = ({ images }) => {
  return (
    <section className="image-grid" aria-label="Search results">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </section>
  );
};
