import { baseUrl } from ".";

type LoginRequest = {
  Username: string;
  Password: string;
};

type RegisterRequest = {
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

export interface LoginResponse {
  user: IUser;
  token: string;
}

export interface RegisterResponse {
  user: IUser;
}

// mutations
export const postRegister = async (data: RegisterRequest) => {
  const response = await fetch(`${baseUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const postLogin = async (data: LoginRequest) => {
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
