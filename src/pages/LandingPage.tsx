import {
  Text,
  Box,
  Heading,

} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import imageBg from "../assets/chitChat_bg.png";
import LoginForm from "../components/LoginForm";
function LandingPage() {
  return (
    <>
      <Box
        bgImage={imageBg}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        minHeight="100vh"
      >
        <Navbar />
        <Box textAlign="center" mt={20}>
          <Heading as="h1" fontSize="4xl" fontWeight="bold" color="black">
            Welcome to ChitChat App
          </Heading>
          <Text fontSize="lg" color="black" mb={9}>
            Discover the power of real-time communication.
          </Text>
          <LoginForm/>
        </Box>
      </Box>
    </>
  );
}

export default LandingPage;
