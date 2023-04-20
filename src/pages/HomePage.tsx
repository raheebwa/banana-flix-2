import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { MovieCard } from "../components/MovieCard";
import { useUserProfile } from "../store";
import { useAuth } from "../store/context/AuthContext";
import { getMovies, getMovie } from "../store/react-query/api/movie.api";

const HomePage = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useAuth();

  const { data, isLoading, error } = useUserProfile(
    localStorage.getItem("username") || ""
  );

  const movieData = {
    // Replace with actual movie data fetched from API
    id: "movieId",
    title: "Example Movie",
    description: "This is an example movie",
    imageURL: "https://example.com/movie.jpg",
    featured: false,
  };

  React.useEffect(() => {
    if (data) {
      setUser(data.Username);

      setIsAuthenticated(true);
    }

  }, [data]);

  return (
    <Box>
      <Heading>Hello, {data?.Username}</Heading>
      <MovieCard id={movieData.id}/>
    </Box>
  );
};

export default HomePage;
