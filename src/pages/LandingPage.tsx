import { Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <>
      <Navbar />
      <div>
        <Text display="flex">Welcome to chitchat folks!</Text>
      </div>
    </>
  );
}

export default LandingPage;
