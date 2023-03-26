import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useUserProfile } from "../store";
import { useAuth } from "../store/context/AuthContext";

const HomePage = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useAuth();

  const { data, isLoading, error } = useUserProfile(
    localStorage.getItem("username") || ""
  );

  React.useEffect(() => {
    if (data) {
      setUser(data.Username);
      setIsAuthenticated(true);
    }

  }, [data]);

  return (
    <Box>
      <Heading>Hello, {data?.Username}</Heading>
    </Box>
  );
};

export default HomePage;
