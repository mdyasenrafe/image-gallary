import { Container } from "@mui/material";
import React from "react";
import useConfigContext from "../context/useConfig";
import ImageCard from "../components/ImageCard";

export default function ImageGallary() {
  const { images } = useConfigContext();

  return (
    <Container className="App">
      <div className="grid md:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <ImageCard key={index} image={image} index={index} />
        ))}
      </div>
    </Container>
  );
}
