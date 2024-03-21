import { SearchIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MobileDrawer from "./MobileDrawer";

const Navbar = () => {
  const temp = true;
  return (
    <Container maxW="container.xl" as="nav">
      <Flex justify="space-between" align="center" p="2">
        <Heading
          fontSize={{ sm: "xl", md: "2xl", lg: "3xl" }}
          fontFamily="DM Sans"
        >
          CommerceStop
        </Heading>
        <Flex
          gap="8"
          align="center"
          display={{ base: "none", md: "inherit" }}
          fontFamily="DM Sans"
        >
          <Link to="/">
            <Text fontSize="lg">Home</Text>
          </Link>
          <Link to="/search">
            <SearchIcon boxSize="4" />
          </Link>
          <Link to="/cart">
            <Text fontSize="lg">Cart</Text>
          </Link>
          {!temp ? (
            <Link to="/login">
              <Button colorScheme="red">Get Started</Button>
            </Link>
          ) : (
            <Menu isLazy>
              <MenuButton>
                <Avatar size="sm" />
              </MenuButton>
              <MenuList fontFamily="DM Sans">
                <MenuItem>
                  <Link to="/orders/:id">
                    <Text>Your Orders</Text>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/account/:id">
                    <Text>Your Account</Text>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Text>Logout</Text>
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
        <Box display={{ md: "none" }}>
          <MobileDrawer />
        </Box>
      </Flex>
    </Container>
  );
};

export default Navbar;
