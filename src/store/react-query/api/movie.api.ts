import { baseUrl } from "../..";
/**
 * Interface for a movie object
 */
export interface IMovie {
  Genre: IGenre;
  Director: IDirector;
  Actors: any[];
  _id: string;
  Title: string;
  Description: string;
  ImageURL: string;
  Featured: boolean;
}

/**
 * Interface for a director object
 */
export interface IDirector {
  Name: string;
  Bio: string;
  Birth: string;
}

/**
 * Interface for a genre object
 */
export interface IGenre {
  Name: string;
  Description: string;
}

/**
 * Set headers for API requests
 */
const myHeaders = {
  /**
   * Content type of the request to JSON
   */
  "Content-Type": "application/json",

  /**
   * Authorization header with a bearer token from the local storage
   */
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

/**
 * Get all movies from the server
 * @returns A Promise of response.json()
 */
export const getMovies = async () => {
  const response = await fetch(`${baseUrl}/movies`, {
    method: "GET",
    headers: myHeaders,
  });
  return response.json();
};

/**
 * Get a single movie by ID from the server
 * @param id - ID of the movie
 * @returns A Promise of response.json()
 */
export const getMovie = async (id: string) => {
  const response = await fetch(`${baseUrl}/movies/${id}`, {
    method: "GET",
    headers: myHeaders,
  });
  return response.json();
};

/**
 * Get a director by ID from the server
 * @param id - ID of the director
 * @returns A Promise of response.json()
 */
export const getDirector = async (id: string) => {
  const response = await fetch(`${baseUrl}/movies/directors/${id}`, {
    method: "GET",
    headers: myHeaders,
  });
  return response.json();
};

/**
 * Get a genre by ID from the server
 * @param id - ID of the genre
 * @returns A Promise of response.json()
 */
export const getGenre = async (id: string) => {
  const response = await fetch(`${baseUrl}/movies/genres/${id}`, {
    method: "GET",
    headers: myHeaders,
  });
  return response.json();
};
