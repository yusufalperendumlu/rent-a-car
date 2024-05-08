import axios from "axios";

export const listCarsByOffice = async ({ officeName }) => {
  try {
    const { data } = await axios.get(
      `http://localhost:1903/api/cars/listcars/${officeName}`
    );

    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};
