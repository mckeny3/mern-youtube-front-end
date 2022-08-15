import { createSlice } from "@reduxjs/toolkit";

const CommentSlice = createSlice({
  name: "comment",
  initialState: {
    commentData: [],
    loading: false,
    error: false,
  },
  reducers: {
    createComment: (state, action) => {
      // state.commentData.push(action.payload);
      return {
        commentData: [action.payload, ...state.commentData],
      };
    },

    fetchCommentStart: (state) => {
      state.loading = true;
    },
    setComment: (state, action) => {
      return { commentData: action.payload, loading: false };
    },
    fetchCommentFail: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const {
  createComment,
  fetchCommentFail,
  fetchCommentStart,
  setComment,
} = CommentSlice.actions;
export default CommentSlice.reducer;
