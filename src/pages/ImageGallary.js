import { Container } from "@mui/material";
import ImageCard from "../components/ImageCard";
import useConfigContext from "../context/useConfig";
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { BsCardImage } from "react-icons/bs";
import { useRef } from "react";

export default function ImageGallery() {
  const fileInputRef = useRef(null);
  // Retrieving the images and update function from the gallery context
  const { galleryImages, selectedImages, setGalleryImages, setSelectedImages } =
    useConfigContext();

  const handleDeleteImages = () => {
    const updatedImages = galleryImages.filter(
      (image) => !selectedImages.includes(image)
    );
    setGalleryImages(updatedImages);
    setSelectedImages([]);
  };

  const handleChange = () => {
    const files = fileInputRef.current.files;
    console.log(files);
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = function (e) {
        const image = {
          id: galleryImages.length + 1,
          source: e.target.result,
          description: file.name,
        };
        setGalleryImages([...galleryImages, image]);
      };
      reader.readAsDataURL(file);
    }
  };
  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Container>
      <div className="border border-gray-300 rounded-lg bg-white">
        <div className="mb-4 border-b border-gray-300 px-4 pt-4">
          <h1 className="font-bold mb-4 text-xl">
            {selectedImages.length > 0 ? (
              <div className="flex justify-between items-center">
                <div className="flex">
                  <BiSolidCheckboxChecked size={24} color="#3366FF" />
                  {selectedImages.length} Files Selected
                </div>
                <p
                  className="text-red-500 text-[14px] cursor-pointer"
                  onClick={handleDeleteImages}
                >
                  Delete files
                </p>
              </div>
            ) : (
              "Image Gallery"
            )}
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-5 auto-rows-fr">
          {galleryImages.map((image, index) => (
            <ImageCard key={index} image={image} index={index} />
          ))}
          {/*  add image section heihgt needs to same as image card */}
          <div className="border border-dashed border-gray-300 rounded-md py-[24px]">
            <div
              className="flex justify-center items-center h-full flex-col cursor-pointer"
              onClick={onButtonClick}
            >
              <BsCardImage size={24} />
              <p className="text-sm mt-2">Add Images</p>
              <input
                type="file"
                className="hidden"
                ref={fileInputRef}
                onChange={(e) => handleChange()}
                accept="image/*"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
