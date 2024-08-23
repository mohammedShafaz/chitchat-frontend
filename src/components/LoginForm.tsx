import {
  Text,
  Box,
  Button,
  Input,
  Flex,
  FormControl,
  FormLabel,
  Link,
  InputGroup,
  InputLeftElement,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../api/auth";
import { login } from "../store/authSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast({position: 'top-right'});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);

    if (!email) {
      toast({
        title: "Email or username missing",
        description: "Please enter your email or username",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    if (!password) {
      toast({
        title: "Password missing",
        description: "Please enter your password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    try {
      setLoading(true);
      const response = await loginApi({
        email: email.trim(),
        password: password.trim(),
      });
      {
        console.log("response", response);
      }

      if (response.status === 200) {
        toast({
          title: "Login Successful",
          description: "Welcome to chitchat",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        dispatch(login(response.data.token));
        localStorage.setItem("token ", response.data.token);
        navigate("/Profile");
      } else {
        toast({
          title: response.data.message,
          description: response.data.message || "Invalid credentials",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error(error);
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage =
          error.response.data.message || "Invalid credentials";
        toast({
          title: "Login failed",
          description: errorMessage,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Flex justifyContent="center">
        <Box
          color="black"
          bgColor="white"
          w={{ base: "90%", md: "50%", lg: "25%" }}
          p={5}
          borderRadius={15}
          boxShadow="2xl"
        >
          <Text fontSize="5xl" fontFamily="system-ui" fontWeight="bolder">
            {" "}
            Login
          </Text>
          <form action="submit" onSubmit={handleLogin}>
            <FormControl mt={5}>
              <FormLabel>Email or username</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FaUser color="grey" />
                </InputLeftElement>
                <Input
                  borderBottom="1px solid grey"
                  mb={5}
                  type="text"
                  placeholder="Type your username or email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FaLock color="grey" />
                </InputLeftElement>
                <Input
                  borderBottom="1px solid grey"
                  mb={5}
                  type="password"
                  placeholder="Type your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>

              <Flex mb={5} justifyContent="right">
                <Link color="#525151" alignItems="start">
                  {" "}
                  forgot password?
                </Link>
                <br />
              </Flex>
              <Button
                colorScheme="teal"
                w="110px"
                type="submit"
                isLoading={loading}
                loadingText="Logging in"
                isDisabled={loading}
              >
                Login
              </Button>
            </FormControl>
          </form>
        </Box>
      </Flex>
    </>
  );
}

export default LoginForm;
