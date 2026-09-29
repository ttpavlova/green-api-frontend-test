import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoutes />} />
        <Route path="/:chatId" element={<ProtectedRoutes />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
