import { apiRequest } from "./apiRequest";
export const getVideos = (section) => {
  return apiRequest(`/video/${section}`);
};
