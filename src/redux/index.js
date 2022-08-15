import videoReducer from "./videoSlice";
import commentReducer from "./commentSlice";
import userReducer from "./userSlice";
import { combineReducers } from "redux";
export default combineReducers({
  video: videoReducer,
  authUser: userReducer,
  comment: commentReducer,
});
