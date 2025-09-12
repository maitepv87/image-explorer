import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const searchImages = async (term) => {
  const response = await axios.get(`${BASE_URL}/search/photos`, {
    headers: { Authorization: `Client-ID ${API_KEY}` },
    params: {
      query: term,
    },
  });

  return response.data.results;
};
