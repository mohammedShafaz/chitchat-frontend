import { Button, Flex } from "@chakra-ui/react";
import RandomButton from "./ui/RandomButton";

function ChatWithRandom() {
  return (
    <>
      <Flex justifyContent="space-evenly">
      <RandomButton btName={"Chat With Random"}/>
        <Button
          w={20}
          h={20}
          borderRadius={40}
          backgroundColor="green.600"
        ></Button>
      </Flex>
    </>
  );
}

export default ChatWithRandom;
