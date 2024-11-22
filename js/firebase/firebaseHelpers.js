import axios from "axios";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export const fetchImage = async (imagePath) => {
  const storage = getStorage();
  const imageRef = ref(storage, imagePath);
  const url = await getDownloadURL(imageRef);
  const res = await axios.get(url, { responseType: "blob" });
  return URL.createObjectURL(res.data);
};
