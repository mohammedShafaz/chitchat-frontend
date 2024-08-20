import {
  Text,
  Box,
  Button,
  Input,
  Flex,
  FormControl,
  FormLabel,
  Link,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FaLock, FaUser } from "react-icons/fa";

function LoginForm() {
  return (
    <>
      <Flex justifyContent="center">
        <Box
          color="black"
          bgColor="white"
          w="25%"
          p={5}
          borderRadius={15}
          boxShadow="2xl"
        >
          <Text fontSize="5xl" fontFamily="system-ui" fontWeight="bolder">
            {" "}
            Login
          </Text>
          <FormControl mt={5}>
            <FormLabel>Email or username</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaUser color="grey" />
              </InputLeftElement>
              <Input
                borderBottom="1px solid grey"
                mb={5}
                type="text"
                placeholder="Type your username or email"
              />
            </InputGroup>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaLock color="grey" />
              </InputLeftElement>
              <Input
                borderBottom="1px solid grey"
                mb={5}
                type="password"
                placeholder="Type your password"
              />
            </InputGroup>

            <Flex mb={5} justifyContent="right">
              <Link color="grey" alignItems="start">
                {" "}
                forgot password?
              </Link>
              <br />
            </Flex>
            <Button color="white" bgColor="teal" w="100px">
              Login
            </Button>
          </FormControl>
        </Box>
      </Flex>
    </>
  );
}

export default LoginForm;
