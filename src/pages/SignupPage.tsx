import {
  Box,
  FormControl,
  Input,
  FormLabel,
  Button,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { IRegisterRequest, useRegister } from "../store";

const SignupPage = () => {
  const { mutate: register, isLoading, error } = useRegister();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const toast = useToast();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const actionResetForm = () => {
    setUsername("");
    setPassword("");
    setEmail("");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const postData: IRegisterRequest = {
      Username: username,
      Password: password,
      Email: email,
    };
    register(postData, {
      onSuccess: (data) => {
        console.log(data);
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });

        actionResetForm();
      },
    });
  };

  return (
    <Box px={"30px"} py={"200px"}>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
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

export default SignupPage;
