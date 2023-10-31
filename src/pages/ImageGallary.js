import { Container } from "@mui/material";
import React from "react";
import useConfigContext from "../context/useConfig";

export default function ImageGallary() {
  const { images, setImages } = useConfigContext();
  return (
    <Container className="App">
      <div className="grid md:grid-cols-5 gap-4">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              draggable={true}
              className={`${
                index === 0 ? "row-span-2 col-span-2" : ""
              } border border-gray-300 rounded-[8px]`}
            >
              <img
                src={image.source}
                alt={image.description}
                className="rounded-[8px]"
              />
            </div>
          );
        })}
      </div>
    </Container>
  );
}
