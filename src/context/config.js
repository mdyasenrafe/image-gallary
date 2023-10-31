import React, { createContext, useState } from "react";
import { imageGalleryData } from "../data/imageGalleryData";

export const ConfigContext = createContext();

export default function ConfigContextProvider({ children }) {
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [images, setImages] = useState(imageGalleryData);
  const [selectedImage, setSelectedImage] = useState([]);

  const handleDragStart = (e, index) => {
    setDraggingIndex(index);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e, index) => {
    e.preventDefault();

    // Reorder the items
    const items = Array.from(images);
    const [draggedImage] = items.splice(draggingIndex, 1);
    items.splice(index, 0, draggedImage);
    setImages(items);
    setDraggingIndex(null);
  };

  const value = {
    images,
    setImages,
    selectedImage,
    setSelectedImage,
    handleDragStart,
    handleDragOver,
    handleDrop,
  };

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
}
