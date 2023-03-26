import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

type AuthContextType = {
  user: string;
  setUser: (user: string) => void;
  movies: any;
  setMovies: (movies: any) => void;
  token: string | null;
  setToken: (token: string) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};

// context
export const AuthContext = React.createContext<AuthContextType>({
  user: "",
  setUser: () => {},
  movies: [],
  setMovies: () => {},
  token: "",
  setToken: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});
// provider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const authToken = localStorage.getItem("token") || null;
  const [user, setUser] = React.useState("");
  const [movies, setMovies] = React.useState([]);
  const [token, setToken] = React.useState(authToken);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      <Navigate to="/login" replace />;
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        movies,
        setMovies,
        token,
        setToken,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// hook
export const useAuth = () => React.useContext(AuthContext);
