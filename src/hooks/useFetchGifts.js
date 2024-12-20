// custom hook

import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";

export const useFetchGifts = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getImages = async () => {
    const newImages = await getGifts(category);
    setImages(newImages);
    setIsLoading(false);
  };
  useEffect(() => {
    getImages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    images,
    isLoading,
  };
};
