export const ImageCard = ({ image }) => {
  return (
    <figure className="image-card">
      <img
        src={image.urls.small}
        alt={image.alt_description || "Image from Unsplash"}
        loading="lazy"
      />
    </figure>
  );
};
