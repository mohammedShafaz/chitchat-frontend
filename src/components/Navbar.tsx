import { Box, Image, Button, Flex } from "@chakra-ui/react";
import logo from "../assets/default-monochrome.svg";
import { useNavigate } from "react-router-dom";
interface NavbarProps {
  showSignIn: boolean;
}
function Navbar({ showSignIn }: NavbarProps) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (showSignIn) {
      navigate("/LandingPage");
    } else {
      navigate("/Register");
    }
  };

  return (
    <Box
      as="nav"
      w="100%"
      h={{ base: "60px", md: "70px" }}
      p={{ base: 3, md: 5 }}
      bgColor="white"
      boxShadow="xl"
      display="flex"
      justifyContent="space-between"
      alignItems="center" // Align items vertically
    >
      <Flex alignItems="center">
        <a href="/">
          <Image
            src={logo}
            alt="logo"
            w={{ base: "100px", md: "115px" }} // Responsive width
          />
        </a>
      </Flex>
      <Flex alignItems="center">
        <Button
          colorScheme="green"
          variant="solid"
          mr={2}
          borderColor="white"
          maxHeight="35px"
          borderRadius={17}
          size={{ base: "sm", md: "md" }}
          onClick={handleButtonClick}
        >
          {showSignIn ? "Sign In" : "Sign Up"}
        </Button>
        <Button
          colorScheme="green"
          variant="solid"
          mr={2}
          borderColor="white"
          maxHeight="35px"
          borderRadius={17}
          size={{ base: "sm", md: "md" }}
          onClick={() => navigate("/Register")}
        >
          About Us
        </Button>
      </Flex>
    </Box>
  );
}

export default Navbar;
