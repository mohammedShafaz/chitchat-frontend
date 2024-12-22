import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Text, Box, VStack } from "@chakra-ui/react";
import UserDashNavbar from "../components/UserDashNavbar";
import ChatWithRandom from "../components/ChatWithRandom";

function Profile() {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <>
      <Box mb={2} >
        <UserDashNavbar />
      </Box>

      <Box
        textAlign={{ base: "center", md: "left" }}
        mt={8}
        px={{ base: 4, sm: 6, md: 10 }}
        py={6}
        background="white"
        borderRadius="lg"
        mx={{ base: 2, sm: "auto", md: "none" }}
        maxW={{ base: "90%", md: "100%" }}
      >
        <VStack align={{ base: "center", md: "start" }} spacing={4}>
          <Text
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            fontWeight="bold"
            fontFamily="monospace"
            color="green.400"
            letterSpacing="wide"
          >
            Hey <span>{`${user?.firstName} ${user?.lastName}`}</span></Text>
          <Text
            fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
            fontWeight="light"
            fontFamily="sans-serif"
            letterSpacing="widest"
            color="gray.600"
          >
             Welcome to{" "}
            <Text as="span" fontWeight="bold" color="green.400">
              Chitchat
            </Text></Text>
          <Text
            fontWeight="light"
            color="gray.700"
            fontSize={{ base: "sm", sm: "md", md: "lg" }}
            lineHeight="tall"
            letterSpacing="widest"
          >Engage in lively conversations or start a video chat with random people.
            Discover the joys of connecting with someone new,<br />
            all from the comfort of your app.
          </Text>
        </VStack>
      </Box>


      <Box  mt={8} p={{ base: 2, sm: 4, md: 6 }} textAlign="center">
        <ChatWithRandom />
      </Box>
    </>
  );
}

export default Profile;
