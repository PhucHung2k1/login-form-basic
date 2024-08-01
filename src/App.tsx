import AppRoutes from "./routes";
import { AuthProvider } from "../src/context/AuthContext";
const App = () => {
  return (
    <div className="layout">
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
};

export default App;
