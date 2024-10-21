import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FormControl, FormLabel, Input, FormHelperText, Button,Text, Flex } from "@chakra-ui/react";
import React from "react";

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
  return (
    <>
       <Text fontSize="xl" mb={4}>
        Basic information
      </Text>
      <FormControl>
        <FormLabel>First Name</FormLabel>
        <Input
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <FormLabel mt={4}>Last Name</FormLabel>
        <Input
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <FormLabel mt={4}>Username</FormLabel>
        <Input
          isRequired
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        onClick={onNext}
      >
      </Button>
      </Flex>
      
    </>
  );
};

export default BasicInfoRegistration;
