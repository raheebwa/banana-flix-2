import React from "react";

type AuthContextType = {
  user: string;
  setUser: (user: string) => void;
  movies: any;
  setMovies: (movies: any) => void;
  token: string | null;
  setToken: (token: string) => void;
};

// context
export const AuthContext = React.createContext<AuthContextType>({
  user: "",
  setUser: () => {},
  movies: [],
  setMovies: () => {},
  token: "",
  setToken: () => {},
});
// provider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const authToken = localStorage.getItem("token") || null;
  const [user, setUser] = React.useState("");
  const [movies, setMovies] = React.useState([]);
  const [token, setToken] = React.useState(authToken);

  return (
    <AuthContext.Provider
      value={{ user, setUser, movies, setMovies, token, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// hook
export const useAuth = () => React.useContext(AuthContext);
