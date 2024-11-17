import useSWR from "swr";
import { fetchImage } from "../firebase/firebaseHelpers.js";

export const loadImage = (imagePath) => {
  const fetcher = () => fetchImage(imagePath);
  const { data, error } = useSWR(imagePath, fetcher);

  return { imageUrl: data, isLoading: !error && !data, isERror: error };
};
