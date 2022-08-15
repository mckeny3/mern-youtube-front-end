import { createSlice } from "@reduxjs/toolkit";

export const VideoSlice = createSlice({
  name: "video",
  initialState: {
    loading: false,
    error: false,
    videoData: [],
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },

    setVideoData: (state, action) => {
      state.videoData = action.payload;
    },
  },
  fetchFail: (state) => {
    state.error = true;
    state.loading = false;
  },
  updateViews: (state, action) => {
    console.log("views action triggered");
    return { ...state.videoData, views: +1 };
  },
});

export const { updateViews, setVideoData, fetchFail, fetchStart } =
  VideoSlice.actions;

export default VideoSlice.reducer;
