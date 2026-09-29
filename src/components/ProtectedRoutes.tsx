import { LoginPage } from "../pages/LoginPage/LoginPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { useChatStore } from "../store/chatStore";
import { getIsAuth } from "../store/selectors";

export const ProtectedRoutes = () => {
  const isAuth = useChatStore(getIsAuth);

  return isAuth ? <HomePage /> : <LoginPage />;
};
