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
  const toast = useToast({ position: "top-right" });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    if (!email) {
      setEmailError("Please enter your email or username.");
      return;
    }

    if (!password) {
      setPasswordError("Please enter your password.");
      return;
    }

    try {
      setLoading(true);
      const response = await loginApi({
        email: email.trim(),
        password: password.trim(),
      });

      if (response.status === 200) {
        toast({
          title: "Login Successful",
          description: "Welcome to ChitChat",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        dispatch(login(response.data.token));
        navigate("/Profile");
      } else {
        setPasswordError("Invalid credentials. Please try again.");
        toast({
          title: response.data.message || "Login failed",
          description: response.data.message || "Invalid credentials",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      const errorMessage =
        axios.isAxiosError(error) && error.response
          ? error.response.data.message || "Invalid credentials"
          : "Something went wrong. Please try again later.";
      setPasswordError(errorMessage);
    
    } finally {
      setLoading(false);
    }
  };
  return (
    <Flex justifyContent="center">
      <Box
        color="black"
        bgColor="white"
        w={{ base: "100%", sm: "80%", md: "60%", lg: "40%" }}
        minW="400px"
        p={6}
        borderRadius={7}
        boxShadow="dark-lg"
        border='none'
      >
        <Text
          as="h1"
          fontSize="4xl"
          fontWeight="bold"
          mb={4}
          textAlign="center"
        >
          Sign In
        </Text>
        <form onSubmit={handleLogin}>
          <FormControl mt={4}>
            <FormLabel>Email or Username</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaUser color="grey" />
              </InputLeftElement>
              <Input
                borderBottom="1px solid grey"
                mb={4}
                type="text"
                placeholder="Type your username or email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            {emailError && (
              <Text color="red.500" fontSize="sm">
                {emailError}
                
              </Text>
            )}

            <FormLabel>Password</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaLock color="grey" />
              </InputLeftElement>
              <Input
                borderBottom="1px solid grey"
                mb={4}
                type="password"
                placeholder="Type your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
            {passwordError && (
              <Text color="red.500" fontSize="sm" textAlign='left'>
                {passwordError}
              </Text>
            )}
            <Flex mb={4} justifyContent="flex-end">
              <Link color="green.700" fontSize="sm">
                Forgot password?
              </Link>
            </Flex>

            <Button
              colorScheme="green"
              w="full"
              h="40px"
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
  );
}

export default LoginForm;
