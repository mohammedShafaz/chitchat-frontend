import { Flex, VStack, Text } from "@chakra-ui/react";
import RandomButton from "./ui/RandomButton";
import { FaComment, FaVideo } from "react-icons/fa";

function ChatWithRandom() {
  return (
    <>
      <Flex justifyContent="space-around"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 10, md: 8 }}
        maxW="100%"
        p={{ base: 2, sm: 6, md: 10 }}>
        <VStack spacing={7}>
          <RandomButton icon={FaComment} />
          <Text  fontSize="lg" fontWeight="bold" letterSpacing="widest" color="#677D6A" >Chat</Text>
        </VStack>
        <VStack spacing={7}>
          <RandomButton icon={FaVideo} />
          <Text fontSize="lg" fontWeight="bold" letterSpacing="widest" color="#677D6A">Video Chat</Text>
        </VStack>
      </Flex>
    </>
  );
}

export default ChatWithRandom;
