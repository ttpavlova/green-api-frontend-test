import { LoginPage } from "../pages/LoginPage/LoginPage";
import { useChatStore } from "../store/chatStore";
import { getIsAuth } from "../store/selectors";
import { Outlet } from "react-router";

export const ProtectedRoutes = () => {
  const isAuth = useChatStore(getIsAuth);

  return isAuth ? <Outlet /> : <LoginPage />;
};
