import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Text, Box } from "@chakra-ui/react";
import UserDashNavbar from "../components/UserDashNavbar";
import ChatWithRandom from "../components/ChatWithRandom";

function Profile() {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <>
      <Box mb={10}>
        <UserDashNavbar />
        <Text> Welcome {`${user?.firstName} ${user?.lastName}`}</Text>
        <br />
      </Box>
      <Box maxW="100%" mt={10}>
        <ChatWithRandom />
      </Box>
    </>
  );
}

export default Profile;
