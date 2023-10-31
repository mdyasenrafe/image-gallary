import React, { createContext, useState } from "react";
import { imageGalleryData } from "../data/imageGalleryData";

export const ImageGalleryContext = createContext();

export default function ConfigContextProvider({ children }) {
  const [draggedImageIndex, setDraggedImageIndex] = useState(null);
  const [galleryImages, setGalleryImages] = useState(imageGalleryData);
  const [selectedImages, setSelectedImages] = useState([]);

  // Handle the drag start event
  const handleStartDrag = (event, index) => {
    setDraggedImageIndex(index);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/html", event.target);
  };

  // Handle the drag over event
  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  // Handle the drop event, updating the image order
  const handleDrop = (event, index) => {
    event.preventDefault();
    const updatedImages = Array.from(galleryImages);
    const [relocatedImage] = updatedImages.splice(draggedImageIndex, 1);
    updatedImages.splice(index, 0, relocatedImage);
    setGalleryImages(updatedImages);
    setDraggedImageIndex(null);
  };

  const contextValue = {
    galleryImages,
    setGalleryImages,
    selectedImages,
    setSelectedImages,
    handleStartDrag,
    handleDragOver,
    handleDrop,
  };

  return (
    <ImageGalleryContext.Provider value={contextValue}>
      {children}
    </ImageGalleryContext.Provider>
  );
}
