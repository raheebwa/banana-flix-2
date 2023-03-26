import { getMovies, getMovie } from "../..";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });
};

export const useMovie = (id: string) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovie(id),
  });
};
