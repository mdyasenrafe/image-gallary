import React, { useContext } from "react";
import { ImageGalleryContext } from "./config";

export default function useConfigContext() {
  const configContext = useContext(ImageGalleryContext);
  return configContext;
}
