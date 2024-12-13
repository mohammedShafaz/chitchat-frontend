import logo from "../assets/default-monochrome.svg";
import {
  Image,
  Menu,
  Flex,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Avatar,
  Text,
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

function UserDashNavbar() {
  const username = useSelector((state: RootState) => state.auth.user?.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/landingPage");
  };
  return (
    <>
      <Flex
        bg="#689496"
        w="100%"
        h={{ base: "50px", md: "60px" }}
        p={{ base: 3, md: 5 }}
        bgColor="white"
        boxShadow="xl"
        alignItems="center"
      >
        {/* Logo Section */}
        <Flex alignItems="center" w="100%">
          <Image src={logo} alt="logo" w="140px" />
        </Flex>

        {/* Menu Section */}
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon color="teal.600" w={5} h={5} />}
            variant="outline"
            color="white"
            _active={{ bg: "grey.700" }}
          />
          <MenuList bg="smokewhite" borderColor="#689496">
            <Flex alignItems="center" p={3}>
              <Avatar size="sm" mr={3} />
              <Text color="black">{username}</Text>
            </Flex>
            <MenuItem
              icon={<FiLogOut />}
              onClick={handleLogout}
              _hover={{ bg: "teal.600" }}
              _focus={{ bg: "teal.700" }}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
}

export default UserDashNavbar;
