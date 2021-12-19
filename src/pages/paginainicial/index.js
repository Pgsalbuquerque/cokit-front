import React from "react";
import { Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Logo from "../../assets/logo.svg";

export const InicialPage = () => {
  const frase = "COZINHAS\n PERTO DE VOCÊ!";
  return (
    <Flex h="100%" w="100%" flexDirection="column" backgroundColor="#ffd400">
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Image src={Logo} w="380x" h="400px" />
        <Text
          fontSize="25px"
          fontWeight="bold"
          ml="60px"
          mr="60px"
          mt="-90px"
          textAlign="center"
        >
          {frase}
        </Text>
        <Flex w="80%" mt="80px">
          <Text
            alignSelf="center"
            justifyContent="center"
            textAlign="center"
            color="#9B8100"
            margin="10px"
            mt="-40px"
          >
            Seja profissional, amante de gastronomia ou apenas uma pessoa comum
            querendo cozinhar em um novo lugar
          </Text>
        </Flex>
        <Flex 
        flexDirection="row"
        mt="100px"
        justifyContent="space-between">
          <Button
            fontWeight="bold"
            h="60px"
            w="160px"
            backgroundColor="#e1b100"
            border="none"
            borderRadius="10px"
            position="absolute"
          >
            <Text
              as={Link}
              to="/login"
              textDecoration="none"
              color="#000000"
              ml="30px"
            >
              ENTRAR
            </Text>
          </Button>
          <Button
            fontWeight="bold"
            h="60px"
            w="160px"
            backgroundColor="#FCF7F7"
            border="#FCF7F7"
            borderRadius="10px"
            ml="-120px"
            position="relative"
            textAlign="end"
          >
            <Text
              as={Link}
              to="/signup"
              textDecoration="none"
              color="#000000"
              ml="20px"
              mr="10px"
            >
              INSCREVER-SE
            </Text>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
