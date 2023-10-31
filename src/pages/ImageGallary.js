import { Container } from "@mui/material";
import ImageCard from "../components/ImageCard";
import useConfigContext from "../context/useConfig";

export default function ImageGallery() {
  // Retrieving the images and update function from the gallery context
  const { galleryImages } = useConfigContext();

  return (
    <Container className="App">
      <div className="grid md:grid-cols-5 gap-4">
        {galleryImages.map((image, index) => (
          <ImageCard key={index} image={image} index={index} />
        ))}
      </div>
    </Container>
  );
}
