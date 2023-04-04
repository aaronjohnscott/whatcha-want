import React from "react";
import { HStack, Box, Flex, Heading, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box borderBottom="2px solid black" bg="white" w="100%" p={4} color="white">
      <Flex alignItems="center" justifyContent="space-between">
        <HStack>
          <Image src="/icon.png" alt="Picture" boxSize="50px" />
          <Heading as="h1" color="black" size="lg" fontFamily="Gruppo">
            SIP SELECTOR
          </Heading>
        </HStack>

        <Box>
          <p></p>
          {/* add any additional header elements here */}
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
