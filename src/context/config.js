import React, { createContext, useState } from "react";
import { imageGalleryData } from "../data/imageGalleryData";

export const ConfigContext = createContext();

export default function ConfigContextProvider({ children }) {
  const [images, setImages] = useState(imageGalleryData);
  const [selectedImage, setSelectedImage] = useState([]);

  const value = {
    images,
    setImages,
    selectedImage,
    setSelectedImage,
  };

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
}
