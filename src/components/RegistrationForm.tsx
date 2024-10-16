import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import CustomFileUpload from "./ImageUpload";

function RegistrationForm() {

  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState<string | null>(null);;
  const [coverPicture, setCoverPicture] = useState<string | null>(null);;
  const [profileBio, setProfileBio] = useState("");
  const [username, setUsername] = useState("");
  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  // const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>, setFile:React.Dispatch<React.SetStateAction<string | null>>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     setFile(URL.createObjectURL(file));
  //   }
  // };

  const handleProfilePictureChange = (file: File | null) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePicture(imageUrl);
    } else {
      setProfilePicture(null);
    }
  };
  const handleCoverPictureChange = (file: File | null) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCoverPicture(imageUrl);
    } else {
      setCoverPicture(null);
    }
  };


  const handleSubmit = () => {
    console.log({
      firstName,
      lastName,
      email,
      username,
      password,
      profilePicture,
      coverPicture,
      profileBio,
    });
  };
  return (
    <>
      <Flex justifyContent="center">
        <Box
          color="black"
          bgColor="white"
          w={{ base: "100%", sm: "80%", md: "60%", lg: "40%" }}
          minW="450px"
          minH="500px"
          p={6}
          borderRadius={7}
          boxShadow="dark-lg"
          border="none"
        >
          <Text fontSize="4xl" as="h1" textAlign="center">
            Sign Up
          </Text>
          {step === 1 && (
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
                ></Input>
                <FormLabel mt={4}>Last Name</FormLabel>
                <Input
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <FormLabel mt={4}>Username</FormLabel>
                <Input isRequired
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <FormHelperText>Ensure username is unique.</FormHelperText>
              </FormControl>
              <Box float="right" mt={4}>
                <Button
                  mt={4}
                  rightIcon={<ArrowForwardIcon boxSize={5} />}
                  colorScheme="green"
                  variant="solid"
                  borderRadius="27px"
                  bgGradient="linear(to-r, green.400, green.500)"
                  onClick={handleNext}
                ></Button>
              </Box>
            </>
          )}
          {step === 2 && (
            <>
              <Text fontSize="xl" mb={4}>
                Account Details
              </Text>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input isRequired
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormLabel mt={4}>Password</FormLabel>
                <InputGroup>
                  <Input isRequired
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
                <FormLabel mt={4}>Confirm Password</FormLabel>
                <InputGroup>
                  <Input isRequired
                    placeholder="Confirm your password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </InputGroup>
                <FormHelperText>Ensure email is unique.</FormHelperText>
              </FormControl>
              <Flex justify="space-between" mt={4}>
                <Button
                  mt={4}
                  rightIcon={<ArrowBackIcon boxSize={5} />}
                  colorScheme="green"
                  variant="solid"
                  borderRadius="27px"
                  bgGradient="linear(to-r, green.400, green.500)"
                  onClick={handleBack}
                ></Button>
                <Button
                  mt={4}
                  rightIcon={<ArrowForwardIcon boxSize={5} />}
                  colorScheme="green"
                  variant="solid"
                  borderRadius="27px"
                  bgGradient="linear(to-r, green.400, green.500)"
                  onClick={handleNext}
                ></Button>
              </Flex>
            </>
          )}
          {step === 3 && (
            <>
              <Text fontSize="xl" mb={4}>
                Additional Information
              </Text>
              <FormControl>
                <CustomFileUpload label="Profile Picture" onFileChange={handleProfilePictureChange} />
                {/* {profilePicture && (
                  <Image maxH="20px"src={profilePicture} alt="profile picture" mt={2} />
                )} */}
                <CustomFileUpload label="Cover Picture" onFileChange={handleCoverPictureChange} />
                {/* {coverPicture && (
                  <Image maxH="20px" src={coverPicture} alt="Cover Picture" mt={2} />
                )} */}
                <FormLabel mt={4}>Profile Bio</FormLabel>
                <Textarea
                  placeholder="Tell us about yourself"
                  value={profileBio}
                  onChange={(e) => setProfileBio(e.target.value)}
                />
              </FormControl>
              <Flex justify="space-between" mt={4}>
                <Button
                  mt={4}
                  rightIcon={<ArrowBackIcon boxSize={5} />}
                  colorScheme="green"
                  variant="solid"
                  borderRadius="27px"
                  bgGradient="linear(to-r, green.400, green.500)"
                  onClick={handleBack}
                ></Button>
                <Button mt={4} colorScheme="green" onClick={handleSubmit}>
                  Submit
                </Button>
              </Flex>
            </>
          )}
        </Box>
      </Flex>
    </>
  );
}

export default RegistrationForm;
