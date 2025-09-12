import { ImageCard } from "./ImageCard";

export const ImageGrid = ({ images }) => {
  return (
    <section>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </section>
  );
};
