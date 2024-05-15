import axios from "axios";

export const signUp = async ({ firstname, lastname, email, password }) => {
  try {
    const { data } = await axios.post(
      "http://localhost:1903/api/user/register",
      {
        firstname,
        lastname,
        email,
        password,
      }
    );

    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }

    throw new Error(error.message);
  }
};

export const signIn = async ({ email, password }) => {
  try {
    const { data } = await axios.post("http://localhost:1903/api/user/login", {
      email,
      password,
    });

    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }

    throw new Error(error.message);
  }
};

export const verifyEmail = async ({ email, userVerifyCode }) => {
  try {
    const { data } = await axios.post(
      "http://localhost:1903/api/user/verify-email",
      {
        email,
        userVerifyCode,
      }
    );

    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }

    throw new Error(error.message);
  }
};

export const sendEmailAgain = async ({ email }) => {
  try {
    const { data } = await axios.post(
      "http://localhost:1903/api/user/send-email-again",
      {
        email,
      }
    );

    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }

    throw new Error(error.message);
  }
};

export const getUserProfile = async ({ token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      "http://localhost:1903/api/user/get-user-by-id",
      config
    );

    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }

    throw new Error(error.message);
  }
};
