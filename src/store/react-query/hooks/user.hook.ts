import { ILoginResponse, IRegisterResponse } from "./../api/user.api";
import { postLogin, postRegister, getUserProfile } from "../..";
import { useMutation, useQuery } from "@tanstack/react-query";

/**
 * Custom hook to handle user login
 * @returns An object containing the mutation function, isLoading state, and any errors that occur
 */
export const useLogin = () => {
  return useMutation(postLogin, {
    onSuccess: (data: ILoginResponse) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.user.Username);
    },
  });
};

/**
 * Custom hook to handle user registration
 * @returns An object containing the mutation function, isLoading state, and any errors that occur
 */
export const useRegister = () => {
  return useMutation(postRegister, {
    onSuccess: (data: IRegisterResponse) => {
      localStorage.setItem("username", data.user.Username);
    },
  });
};

/**
 * Custom hook to retrieve a user profile
 * @param username - Username of the user whose profile to retrieve
 * @returns An object containing the query data, isLoading state, and any errors that occur
 */
export const useUserProfile = (username: string) => {
  return useQuery({
    queryKey: ["user", username],
    queryFn: () => getUserProfile(username),
  });
};
