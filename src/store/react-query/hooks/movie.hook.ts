import { getMovies, getMovie } from "../..";
import { useQuery } from "@tanstack/react-query";

/**
 * Custom hook to get all movies
 * @returns An object containing the query data, isLoading state, and any errors that occur
 */
export const useMovies = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });
};

/**
 * Custom hook to get a single movie by ID
 * @param id - ID of the movie to retrieve
 * @returns An object containing the query data, isLoading state, and any errors that occur
 */
export const useMovie = (id: string) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovie(id),
  });
};
