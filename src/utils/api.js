import axios from "axios";

const BASE_URL = "https://googleapis.com/youtube/v3";

const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": 'AIzaSyDv4pV6_aCFaYpwLX4DK9V0txTQvldne0Q',
    "X-RapidAPI-Host": "googleapis.com/youtube/v3",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
