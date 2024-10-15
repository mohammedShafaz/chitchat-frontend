import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import RegistrationForm from "../components/RegistrationForm";
import imageBg from "../assets/chitChat_bg.png";
function Register() {
  return (
    <>
      <Box
        position="relative"
        minHeight="100vh"
        overflow="hidden"
      >
        <Box
          bgImage={imageBg}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
          minHeight="100vh"
          w="100%"
          position="absolute"
          top="0"
          left="0"
          zIndex="-1"
          opacity="0.5"
        ></Box>
        <Navbar showSignIn={true} />
        <Box p={5} mt={7}>
          <RegistrationForm />
        </Box>
      </Box>
    </>
  );
}

export default Register;
