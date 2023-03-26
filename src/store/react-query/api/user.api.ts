import { baseUrl } from "../..";
/**
 * Type for the request object of user login
 */
export type ILoginRequest = {
  Username: string;
  Password: string;
};

/**
 * Type for the request object of user registration
 */
export type IRegisterRequest = {
  Username: string;
  Password: string;
  Email: string;
};

/**
 * Interface for a user object
 */
export interface IUser {
  _id: string;
  Username: string;
  Password: string;
  Email: string;
  FavoriteMovies: string[];
  __v: number;
}

/**
 * Interface for the response object of user login
 */
export interface ILoginResponse {
  user: IUser;
  token: string;
}

/**
 * Interface for the response object of user registration
 */
export interface IRegisterResponse {
  user: IUser;
}

/**
 * Makes a POST request to register a user
 * @param data - Request object containing user registration information
 * @returns A Promise of response.json()
 */
export const postRegister = async (data: IRegisterRequest) => {
  const response = await fetch(`${baseUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

/**
 * Makes a POST request to login a user
 * @param data - Request object containing user login information
 * @returns A Promise of response.json()
 */
export const postLogin = async (data: ILoginRequest) => {
  const response = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

/**
 * Makes a GET request to retrieve a user profile
 * @param username - Username of the user whose profile to retrieve
 * @returns A Promise of response.json()
 */
export const getUserProfile = async (username: string) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${baseUrl}/profiles/${username}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};
