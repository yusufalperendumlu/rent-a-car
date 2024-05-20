import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "@/store/reducers/userReducers";

const userInfoFromStorage = localStorage.getItem("account")
  ? JSON.parse(localStorage.getItem("account"))
  : null;

const initialState = {
  user: { userInfo: userInfoFromStorage },
};

console.log(initialState);

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: initialState,
});

export default store;
