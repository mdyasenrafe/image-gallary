import React, { useEffect, useState } from "react";
import { BiCheckbox, BiSolidCheckboxChecked } from "react-icons/bi";
import useConfigContext from "../context/useConfig";

export default function ImageCard({ image, index }) {
  const {
    setSelectedImages,
    selectedImages,
    handleStartDrag,
    handleDragOver,
    handleDrop,
  } = useConfigContext();

  // State to manage hover and selection status of the image card
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    // Check if the image is already selected
    const isAlreadySelected = selectedImages.some((img) => img.id === image.id);
    if (isAlreadySelected) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selectedImages, image]);

  // Function to handle the selection of an image
  const handleSelectImage = () => {
    setSelectedImages([...selectedImages, image]);
  };

  // Function to handle the deselection of an image
  const handleDeselectImage = () => {
    setSelectedImages(selectedImages.filter((img) => img.id !== image.id));
  };

  // Function to toggle the selection status of an image
  const toggleSelection = () => {
    isSelected ? handleDeselectImage() : handleSelectImage();
  };

  return (
    <div
      draggable
      onDragStart={(e) => handleStartDrag(e, index)}
      onDragOver={(e) => handleDragOver(e, index)}
      onDrop={(e) => handleDrop(e, index)}
      className={`border border-gray-300 rounded-md relative ${
        index === 0 ? "row-span-2 col-span-2" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={toggleSelection}
    >
      <img src={image.source} alt={image.description} className="rounded-md" />
      {(isSelected || isHovered) && (
        <div
          className={`absolute w-full top-0 left-0 p-2 rounded-md h-full ${
            isSelected ? "bg-[#f8fff980]" : "bg-[#e5e7eb80]"
          }`}
        >
          {isSelected ? (
            <BiSolidCheckboxChecked size={24} color="#3366FF" />
          ) : (
            <BiCheckbox size={24} />
          )}
        </div>
      )}
    </div>
  );
}
