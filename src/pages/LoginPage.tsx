import { Box, FormControl, Input, FormLabel, Button } from "@chakra-ui/react";
import React from "react";
import { ILoginRequest, useLogin } from "../store";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const { mutate: login, isLoading, error } = useLogin();
  const navigate = useNavigate(); // useNavigate hook

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");


  const handleSubmit = (e: any) => {
    e.preventDefault();
    const postData:ILoginRequest = {
      Username: username,
      Password: password,
    };
    login(postData, {
      onSuccess: (data) => {
        navigate("/"); // navigate to "/" after successful login
        console.log(data);
      },
    });
  };

  return (
    <Box px={"30px"} py={"200px"}>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <Button type="submit" mt={4} onClick={handleSubmit}>
        Login
      </Button>
    </Box>
  );
};

export default LoginPage;
