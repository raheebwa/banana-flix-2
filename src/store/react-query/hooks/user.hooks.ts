import { postLogin, postRegister, getUserProfile } from "../api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useLogin = () => {
  return useMutation(postLogin, {
    onSuccess: (data) => {
        localStorage.setItem("token", data.token);
        queryClient.invalidateQueries(["user"]);
        },
  });
};

const queryClient = useQueryClient();

export const useRegister = () => {
  return useMutation(postRegister, {
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      queryClient.invalidateQueries(["user"]);
    },
  });
};

export const useUserProfile = (username: string) => {
  return useQuery({
    queryKey: ["user", username],
    queryFn: () => getUserProfile(username),
  });
};
