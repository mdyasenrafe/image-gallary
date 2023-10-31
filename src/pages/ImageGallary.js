import { Container } from "@mui/material";
import ImageCard from "../components/ImageCard";
import useConfigContext from "../context/useConfig";
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { BsCardImage } from "react-icons/bs";

export default function ImageGallery() {
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

  return (
    <Container>
      <div className="border border-[#e1e1e1] rounded-lg bg-white">
        <div className="mb-4 border-b border-b-[#e1e1e1] px-4 pt-4">
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

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-5">
          {galleryImages.map((image, index) => (
            <ImageCard key={index} image={image} index={index} />
          ))}
          {/*  add image section */}
          <div className="border border-dashed border-gray-300 rounded-md ">
            <div className="flex justify-center items-center h-full flex-col">
              <BsCardImage size={24} />
              <p className="text-sm mt-2">Add Images</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
