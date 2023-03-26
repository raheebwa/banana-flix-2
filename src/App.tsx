import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { AuthProvider } from "./store/context/AuthContext";
import { baseUrl } from "./store";
import { ServerStateProvider } from "./store/react-query/ServerStateProvider";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<HomePage />} />,
    <Route path="signup" element={<SignupPage />} />,
    <Route path="login" element={<LoginPage />} />,
  ])
);


console.log(baseUrl);
function App() {
  return (
    <ServerStateProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ServerStateProvider>
  );
}

export default App;
