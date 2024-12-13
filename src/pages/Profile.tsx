import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Text, Box, Flex } from "@chakra-ui/react";
import UserDashNavbar from "../components/UserDashNavbar";
import ChatWithRandom from "../components/ChatWithRandom";

function Profile() {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <>
      <Box>
        <UserDashNavbar />
        <Text> Welcome {user?.username}</Text>
        <br />
      </Box>
      <Flex alignItems="center" justifyContent="center">
        <ChatWithRandom />
      </Flex>
    </>
  );
}

export default Profile;
