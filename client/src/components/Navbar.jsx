import React from "react";
import {
  Container,
  Flex,
  Box,
  Spacer,
  Button,
  Heading,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex padding={5} bg = {'white'}>
      <Box p="2">
        <Heading size="md">Memories</Heading>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="teal" mr="4">
          Sign Up
        </Button>
        <Button colorScheme="teal">Log in</Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
