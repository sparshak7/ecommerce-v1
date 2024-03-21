import { ExternalLinkIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
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
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

const MobileDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const temp = true;
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
            fontFamily="DM Sans"
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
            {!temp ? (
              <Link to="/login">
                <Button
                  leftIcon={<ExternalLinkIcon />}
                  // bg="#fff"
                  // color="#333"
                  colorScheme="red"
                  onClick={() => {
                    onClose();
                  }}
                >
                  <Text fontSize="lg" ml="2">
                    Get Started
                  </Text>
                </Button>
              </Link>
            ) : (
              <Menu isLazy>
                <MenuButton>
                  <Button
                    leftIcon={<MdAccountCircle style={{ fontSize: "18px" }} />}
                    bg="#fff"
                    color="#333"
                  >
                    Profile
                  </Button>
                </MenuButton>
                <MenuList fontFamily="DM Sans">
                  <MenuItem>
                    <Link
                      to="/orders/:id"
                      onClick={() => {
                        onClose();
                      }}
                    >
                      <Text>Your Orders</Text>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/account/:id"
                      onClick={() => {
                        onClose();
                      }}
                    >
                      <Text>Your Account</Text>
                    </Link>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      onClose();
                    }}
                  >
                    <Text>Logout</Text>
                  </MenuItem>
                </MenuList>
              </Menu>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
