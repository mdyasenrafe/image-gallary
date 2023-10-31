import React, { useState } from "react";
import useConfigContext from "../context/useConfig";
import { BiCheckbox, BiSolidCheckboxChecked } from "react-icons/bi";

export default function ImageCard({ image, index }) {
  const { setSelectedImage, selectedImage } = useConfigContext();

  // Local state to manage hover and selection status
  const [isHovering, setHoveringStatus] = useState(false);
  const [isSelected, setSelectionStatus] = useState(false);

  // Function to handle image selection
  const selectImage = () => {
    console.log("Image selected");
    setSelectionStatus(true);
    setSelectedImage([...selectedImage, image]);
  };

  // Function to handle image deselection
  const deselectImage = () => {
    setSelectionStatus(false);
    setSelectedImage(
      selectedImage.filter((selected) => selected.id !== image.id)
    );
  };

  return (
    <div
      draggable={true}
      className={`${
        index === 0 ? "row-span-2 col-span-2" : ""
      } border border-gray-300 rounded-md relative`}
      onMouseEnter={() => setHoveringStatus(true)}
      onMouseLeave={() => setHoveringStatus(false)}
      onClick={() => {
        isSelected ? deselectImage() : selectImage();
      }}
    >
      <img src={image.source} alt={image.description} className="rounded-md" />
      {(isSelected || isHovering) && (
        <div
          className={`${
            isSelected ? "bg-[#f8fff980]" : "bg-[#e5e7eb80]"
          } absolute w-full top-0 left-0 p-2 rounded-md h-full`}
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
