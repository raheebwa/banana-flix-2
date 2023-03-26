import { Center, Heading } from "@chakra-ui/react";
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

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<HomePage />} />,
    <Route path="signup" element={<SignupPage />} />,
    <Route path="login" element={<LoginPage />} />,
  ])
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
