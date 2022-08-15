import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "authUser",
  initialState: {
    loading: false,
    error: null,
    currentUser: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    logOut: (state) => {
      state.currentUser = null;
      state.loading = false;
    },
    loginStart: (state) => {
      state.loading = true;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateSub: (state, action) => {
      const myArray = state.currentUser.subscribedUsers;

      if (myArray.includes(action.payload)) {
        console.log("reducer includeinclude");
        const index = myArray.findIndex((e) => e === action.payload);

        if (index !== "-1") {
          myArray.splice(index, 1);
          state.currentUser.subscribedUsers = myArray;

          //then update chanel count

          console.log("spliiced");
        } else {
          console.log("no value to splice");
        }
      } else {
        console.log("reducer not include");

        state.currentUser.subscribedUsers.push(action.payload);
      }
    },
  },
});

export const { updateSub, loginFail, logOut, setUser, loginStart } =
  userSlice.actions;

export default userSlice.reducer;

//////////custom hooks
export const selectCurrentUser = (state) => state.user;

export const authUser = (state) => state.authUser;
