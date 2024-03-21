import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MobileDrawer from "./MobileDrawer";

const Navbar = () => {
  return (
    <Container maxW="container.xl">
      <Flex justify="space-between" align="center" p="2">
        <Heading fontSize={{ sm: "xl", md: "2xl", lg: "3xl" }}>
          CommerceStop
        </Heading>
        <Flex gap="8" align="center" display={{ base: "none", md: "inherit" }}>
          <Link to="/">
            <Text fontSize="lg">Home</Text>
          </Link>
          <Link to="/search">
            <SearchIcon boxSize="4" />
          </Link>
          <Link to="/cart">
            <Text fontSize="lg">Cart</Text>
          </Link>
          <Avatar size="sm" />
        </Flex>
        <Box display={{ md: "none" }}>
          <MobileDrawer />
        </Box>
      </Flex>
    </Container>
  );
};

export default Navbar;
