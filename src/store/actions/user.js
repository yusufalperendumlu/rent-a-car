import { userActions } from "@/store/reducers/userReducers";

export const logout = () => (dispacth) => {
  dispacth(userActions.resetUserInfo());
  localStorage.removeItem("account");
};
