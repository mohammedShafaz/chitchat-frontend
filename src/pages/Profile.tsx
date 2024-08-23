import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Text } from "@chakra-ui/react";
function Profile() {
  const token = useSelector((state: RootState) => state.auth.token);
  return (
    <>
      <div>Profile</div>
      <Text>Token: {token}</Text>
    </>
  );
}

export default Profile;
