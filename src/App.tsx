import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { HomePage } from "./pages/HomePage/HomePage";
import { ValidChatRoute } from "./components/ValidChatRoute";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/:chatId" element={<ValidChatRoute />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
