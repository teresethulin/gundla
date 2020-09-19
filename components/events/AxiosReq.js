import axios from "axios";

export const AxiosReq = async (data) => {
  try {
    const res = await axios.post("https://formspree.io/mbjpjrnl", data);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
