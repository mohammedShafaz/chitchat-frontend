import { FormControl, FormLabel, Input, InputGroup, FormHelperText, Text } from "@chakra-ui/react";
import React from "react";
import NavigationButtons from "./NavigationButtons";
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
  return (
    <>
    <Text fontSize="xl" mb={4}>
                Account Details
              </Text>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  isRequired
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormLabel mt={4}>Password</FormLabel>
                <InputGroup>
                  <Input
                    isRequired
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
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
                <FormHelperText>Ensure email is unique.</FormHelperText>
              </FormControl>
              <NavigationButtons
                onBack={onBack}
                onNext={onNext}
              ></NavigationButtons>
    </>
  );
};

export default AccountDetails;
