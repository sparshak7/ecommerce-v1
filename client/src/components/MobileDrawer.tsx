import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Text,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

const MobileDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  return (
    <>
      <IconButton
        aria-label="Open drawer"
        icon={<HamburgerIcon />}
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody
            display="flex"
            gap="16"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            color="#333"
          >
            <Link to="/">
              <Button
                leftIcon={<FaHome />}
                bg="#fff"
                color="#333"
                onClick={() => {
                  onClose();
                }}
              >
                <Text fontSize="lg" ml="2">
                  Home
                </Text>
              </Button>
            </Link>
            <Link to="/search">
              <Button
                leftIcon={<SearchIcon />}
                bg="#fff"
                color="#333"
                onClick={() => {
                  onClose();
                }}
              >
                <Text fontSize="lg" ml="2">
                  Search
                </Text>
              </Button>
            </Link>
            <Link to="/cart">
              <Button
                leftIcon={<FaShoppingCart />}
                bg="#fff"
                color="#333"
                onClick={() => {
                  onClose();
                }}
              >
                <Text fontSize="lg" ml="2">
                  Your Cart
                </Text>
              </Button>
            </Link>
            <Link to="/">
              <Button
                leftIcon={<MdAccountCircle style={{ fontSize: "18px" }} />}
                bg="#fff"
                color="#333"
                onClick={() => {
                  onClose();
                }}
              >
                <Text fontSize="lg" ml="2">
                  Your Account
                </Text>
              </Button>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
