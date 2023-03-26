import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
/**
 * Type for the context object in the AuthContext
 */
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

// Context
/**
 * AuthContext for storing user authentication information
 */
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

// Provider
/**
 * AuthProvider component for providing authentication information to its children components
 * @param children - Children components to wrap with the AuthProvider context
 * @returns JSX.Element
 */
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

// Hook
/**
 * useAuth hook for accessing AuthContext values
 * @returns The AuthContextType object
 */
export const useAuth = () => React.useContext(AuthContext);
