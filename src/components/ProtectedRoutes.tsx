import { LoginPage } from "../pages/LoginPage/LoginPage";
import { useChatStore } from "../store/chatStore";
import { selectIsAuth } from "../store/selectors";
import { Outlet } from "react-router";

export const ProtectedRoutes = () => {
  const isAuth = useChatStore(selectIsAuth);

  return isAuth ? <Outlet /> : <LoginPage />;
};
