import axios from "axios";
const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true,
});
export const apiRequest = async (url, option) => {
  try {
    const res = await api(url, option);
    return res.data;
  } catch (error) {
    return await Promise.reject(error?.message ?? "Error");
  }
};
