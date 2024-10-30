import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Text,
  Flex,
  FormErrorMessage,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { findUser } from "../api/users";
import axios from "axios";

interface Step1Props {
  firstName: string;
  lastName: string;
  username: string;
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  setUsername: (value: string) => void;
  onNext: () => void;
}

const BasicInfoRegistration: React.FC<Step1Props> = ({
  firstName,
  lastName,
  username,
  setFirstName,
  setLastName,
  setUsername,
  onNext,
}) => {
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });
  const validateFields = () => {
    const newErrors = { firstName: "", lastName: "", username: "" };
    if (!firstName) newErrors.firstName = "First name is required";
    if (!lastName) newErrors.lastName = "Last name is required";
    if (!username) newErrors.username = "Username is required";
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const [usernameError, setUsernameError] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  useEffect(() => {
    if (username) {
      const checkUsername = async () => {
        setIsChecking(true);
        try {
          const response = await findUser({ email: username });
          if (response.status === 200) {
            setUsernameError("");
          }
        } catch (error: unknown) {
          if (axios.isAxiosError(error) && error.response?.status === 400) {
            setUsernameError("Username is already taken.");
          } else {
            setUsernameError("Error checking username.");
          }
        } finally {
          setIsChecking(false);
        }
      };
      const timeoutId = setTimeout(checkUsername, 500); // Debounce API call
      return () => clearTimeout(timeoutId);
    }
  }, [username]);
  const handleNext = () => {
    if (validateFields() && !usernameError) {
      onNext();
    }
  };

  return (
    <>
      <Text fontSize="xl" mb={4}>
        Basic information
      </Text>
      <FormControl isRequired isInvalid={!firstName}>
        <FormLabel>First Name</FormLabel>
        <Input
          isRequired={true}
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <FormErrorMessage>{errors.firstName}</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={!lastName}>
        <FormLabel mt={4}>Last Name</FormLabel>
        <Input
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <FormErrorMessage>{errors.lastName}</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={!username}>
        <FormLabel mt={4}>Username</FormLabel>
        <Input
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormErrorMessage>{errors.username || usernameError}</FormErrorMessage>
        <FormHelperText>Ensure username is unique.</FormHelperText>
      </FormControl>
      <Flex float="right">
        <Button
          mt={4}
          rightIcon={<ArrowForwardIcon boxSize={5} />}
          colorScheme="green"
          variant="solid"
          borderRadius="27px"
          bgGradient="linear(to-r, green.400, green.500)"
          onClick={handleNext}
          isDisabled={isChecking}
        ></Button>
      </Flex>
    </>
  );
};

export default BasicInfoRegistration;
