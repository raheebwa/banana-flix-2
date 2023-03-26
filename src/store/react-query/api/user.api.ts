import { baseUrl } from "../..";

export type ILoginRequest = {
  Username: string;
  Password: string;
};

export type IRegisterRequest = {
  Username: string;
  Password: string;
  Email: string;
};

export interface IUser {
  _id: string;
  Username: string;
  Password: string;
  Email: string;
  FavoriteMovies: string[];
  __v: number;
}

export interface ILoginResponse {
  user: IUser;
  token: string;
}

export interface IRegisterResponse {
  user: IUser;
}

// mutations
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
