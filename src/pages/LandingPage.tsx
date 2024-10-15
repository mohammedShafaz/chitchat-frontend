import { Text, Box, Heading, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import imageBg from "../assets/chitChat_bg.png";
import LoginForm from "../components/LoginForm";
function LandingPage() {
  return (
    <>
      <Box position="relative" minHeight="100vh"  overflow='hidden'>
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
        <Navbar showSignIn={false} />
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          minHeight="calc(100vh - 70px)"
          px={{ base: 5, md: 20 }}
          py={{ base: 10, md: 0 }}
          zIndex="1"
        >
          <Box
            textAlign={{ base: "center", md: "left" }}
            color="black"
            maxW="500px"
          >
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="bold"
              mb={4}
            >
              Welcome to ChitChat
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }}>
              Discover the power of real-time communication.
            </Text>
          </Box>
          <Flex mt={{ base: 10, md: 0 }}
          justifyContent='center'
          alignItems='center'
          maxW='400px'
          w='100%'
          mr={10}
          >
            <LoginForm/>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default LandingPage;
