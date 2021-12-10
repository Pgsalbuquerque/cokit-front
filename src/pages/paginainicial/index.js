import React from "react";

import { Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Logo from "../../assets/logo.svg";

export const InicialPage = () => {
    const frase = 'COZINHAS\n PERTO DE VOCÊ!';
    console.log(frase);
  return (
    <Flex h="100%" w="100%" flexDirection="column" backgroundColor="#ffd400">
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Image src={Logo} w="450x" h="450px" />
        <Text fontSize="25px" fontWeight="bold" mt="-90px" textAlign="center">{frase}</Text>
        <Flex w="80%" mt="40px">
          <Text
            alignSelf="center"
            justifyContent="center"
            mt="25px"
            textAlign="center"
            color="#9B8100"
          >
            Seja profissional, amante de gastronomia ou apenas uma pessoa comum
            querendo cozinhar em um novo lugar
          </Text>
        </Flex>
        <Flex flexDirection="row" mt="80px">
          <Button
            fontWeight="bold"
            h="60px"
            w="170px"
            backgroundColor="#e1b100"
            border="none solid "
            border
            borderRadius="10px"
            position="absolute"
          >
            <Text ml="20p">ENTRAR</Text>
          </Button>
          <Button
            fontWeight="bold"
            h="60px"
            w="170px"
            backgroundColor="#FCF7F7"
            border="#FCF7F7"
            borderRadius="10px"
            ml="-120px"
            position="relative"
            textAlign="end"
          >
            INSCREVER-SE
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
