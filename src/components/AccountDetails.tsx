import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Text,
  FormErrorMessage,
  Spinner,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NavigationButtons from "./NavigationButtons";
import { findUser } from "../api/users";
import axios from "axios";
interface Step2Props {
  email: string;
  password: string;
  confirmPassword: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setConfirmPassword: (value: string) => void;
  onBack: () => void;
  onNext: () => void;
}

const AccountDetails: React.FC<Step2Props> = ({
  email,
  password,
  confirmPassword,
  setEmail,
  setPassword,
  setConfirmPassword,
  onBack,
  onNext,
}) => {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const validateFields = () => {
    const newErrors = { email: "", password: "", confirmPassword: "" };
    if (!email) newErrors.email = "email is required";
    if (!password) newErrors.password = "password is required";
    if (!confirmPassword)
      newErrors.confirmPassword = "confirmPassword is required";
    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if(password.length<8){
      newErrors.password = "Password need minimum 8 characters.";
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };
  const [emailError, setEmailError] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  useEffect(() => {
    if (email) {
      const checkUsername = async () => {
        setIsChecking(true);
        try {
          console.log("this is email:", email);

          const response = await findUser({ email: email });
          if (response.status === 200) {
            setEmailError("");
          }
          console.log("response",response);
          
        } catch (error: unknown) {
          if (axios.isAxiosError(error) && error.response?.status === 409) {
            setEmailError("email is already existing.");
          } else {
            console.error("Error checking email:", error);
            setEmailError("Error checking email.");
          }
        } finally {
          setIsChecking(false);
        }
      };
      const timeoutId = setTimeout(checkUsername, 2000); // Debounce API call
      return () => clearTimeout(timeoutId);
    }
  }, [email]);
  const handleNext = () => {
    if (validateFields() && !emailError) {
      onNext();
    }
  };

  return (
    <>
      <Text fontSize="xl" mb={4}>
        Account Details
      </Text>
      <FormControl isRequired isInvalid={!!errors.email || !!emailError}>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {isChecking && <Spinner size="sm" />}
        <FormErrorMessage>{emailError || errors.email}</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={!!errors.password}>
        <FormLabel mt={4}>Password</FormLabel>
        <InputGroup>
          <Input
            isRequired
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
        <FormErrorMessage>{errors.password}</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={!!errors.confirmPassword}>
        <FormLabel mt={4}>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            isRequired
            placeholder="Confirm your password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </InputGroup>
        <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
      </FormControl>
      <NavigationButtons
        onBack={onBack}
        onNext={handleNext}
      ></NavigationButtons>
    </>
  );
};

export default AccountDetails;
