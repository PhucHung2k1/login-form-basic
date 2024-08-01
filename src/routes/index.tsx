import ProtectedRoute from "@components/common/ProtectedRoute";
import HomePage from "@pages/HomePage";
import NotFoundPage from "@pages/NotFoundPage";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "@pages/LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/notfound" element={<NotFoundPage />} />
      <Route path="/home" element={<ProtectedRoute element={HomePage} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default AppRoutes;
