import axios from "axios";

export const AxiosReq = async (data) => {
  try {
    const res = await axios.post("https://formspree.io/mbjpjrnl", data);
    if (res.status !== 200) {
      return false;
    }
    return true;
  } catch (error) {
    return error;
  }
};
