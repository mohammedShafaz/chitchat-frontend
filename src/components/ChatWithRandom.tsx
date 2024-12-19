import { Flex } from "@chakra-ui/react";
import RandomButton from "./ui/RandomButton";
import { FaComment, FaVideo } from "react-icons/fa";

function ChatWithRandom() {
  return (
    <>
      <Flex justifyContent="space-evenly" alignContent="center"  maxW="100%" maxH="100%" p={10}>
        <RandomButton icon={FaComment} />
        <RandomButton icon={FaVideo} />
      </Flex>
    </>
  );
}

export default ChatWithRandom;
