import { baseUrl } from "../..";

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

export interface IDirector {
  Name: string;
  Bio: string;
  Birth: string;
}

export interface IGenre {
  Name: string;
  Description: string;
}

const myHeaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

// queries
export const getMovies = async () => {
  const response = await fetch(`${baseUrl}/movies`, {
    method: "GET",
    headers: myHeaders,
  });
  return response.json();
};

export const getMovie = async (id: string) => {
  const response = await fetch(`${baseUrl}/movies/${id}`, {
    method: "GET",
    headers: myHeaders,
  });
  return response.json();
};

export const getDirector = async (id: string) => {
  const response = await fetch(`${baseUrl}/movies/directors/${id}`, {
    method: "GET",
    headers: myHeaders,
  });
  return response.json();
};

export const getGenre = async (id: string) => {
  const response = await fetch(`${baseUrl}/movies/genres/${id}`, {
    method: "GET",
    headers: myHeaders,
  });
  return response.json();
};

