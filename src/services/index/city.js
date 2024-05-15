import axios from "axios";

export const getCityOffice = async () => {
  try {
    const { data } = await axios.get("http://localhost:1903/api/city/offices");

    return data.data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};
