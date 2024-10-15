import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Text, Box } from "@chakra-ui/react";
import UserDashNavbar from "../components/UserDashNavbar";

function Profile() {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <>
      <Box>
        <UserDashNavbar />
        <Text> Welcome {user?.username}</Text>
      </Box>
    </>
  );
}

export default Profile;
