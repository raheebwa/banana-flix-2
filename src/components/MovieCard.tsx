import { Card, Button } from "@chakra-ui/react";
import { useMovie } from "../store";
import React from "react";

/**
 * Props for the MovieCard component
 */
interface MovieCardProps {
  id: string; // ID of the movie to display
}

/**
 * MovieCard component to display movie details
 * @param {MovieCardProps} props - Props for the MovieCard component
 * @returns {JSX.Element} - JSX element with movie details
 */
export const MovieCard: React.FC<MovieCardProps> = ({ id }) => {
  // Fetch movie data using useMovie hook
  const { data: movie, isLoading, error } = useMovie(id);

  // Display loading state while fetching data
  if (isLoading) {
    return <div>Loading movie details...</div>;
  }

  // Display error message if an error occurs
  if (error) {
    return <div>Error: 
      {/* {error.message} */}
      </div>;
  }

  // Render movie details
  return (
    <div>
      <h2>{movie.Title}</h2>
      <p>Genre: {movie.Genre.name}</p>
      <p>Director: {movie.Director.name}</p>
      <p>Description: {movie.Description}</p>
      <img src={movie.ImageURL} alt={movie.Title} />
    </div>
  );
};
