import React, { createContext, useState } from "react";
import { imageGalleryData } from "../data/imageGalleryData";

export const ConfigContext = createContext();

export default function ConfigContextProvider({ children }) {
  const [images, setImages] = useState(imageGalleryData);

  const value = {
    images,
    setImages,
  };

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
}
