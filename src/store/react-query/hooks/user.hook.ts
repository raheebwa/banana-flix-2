import { ILoginResponse, IRegisterResponse } from './../api/user.api';
import { postLogin, postRegister, getUserProfile } from "../..";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useLogin = () => {
  return useMutation(postLogin, {
    onSuccess: (data:ILoginResponse) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.user.Username);
    },
  });
};

export const useRegister = () => {
  return useMutation(postRegister, {
    onSuccess: (data:IRegisterResponse) => {
      localStorage.setItem("username", data.user.Username);
    },
  });
};

export const useUserProfile = (username: string) => {
  return useQuery({
    queryKey: ["user", username],
    queryFn: () => getUserProfile(username),
  });
};
