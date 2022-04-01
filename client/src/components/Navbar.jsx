import React from "react";
import {
  Container,
  Flex,
  Box,
  Spacer,
  Button,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = ({ setisSignIn }) => {
  return (
    <Flex padding={5} bg = {'white'}>
      <Box p="2">
        <Heading size="md">Memories</Heading>
      </Box>
      <Spacer />
      <Box>
        <Link to="/auth" >
        <Button colorScheme="teal" mr="4" onClick={() => setisSignIn(false)} >
          Sign Up
        </Button>
        </Link>
        <Link to="/auth" >
        <Button colorScheme="teal" onClick={() => setisSignIn(true)}>Log in</Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
