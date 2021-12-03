import React from "react";

import { Text, Flex, Box, Input, Button, Icon } from "@chakra-ui/react";
import Fundo from "../../assets/fundo.png";
import { BiChevronRight } from "react-icons/bi";

export const Ajuda = () => {
  return (
    <Flex
      backgroundImage={Fundo}
      h="100%"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      alignItems="center"
      justifyContent="space-start"
      flexDirection="column"
    >
      <Flex flexDirection="column" marginTop="20px" alignItems="center">
        <Box h="2" w="13rem" backgroundColor="#FFC633"></Box>
        <Text as="h1" maxH="100" fontSize="40px" color="#fff">
          Ajuda
        </Text>
        <Box h="2" w="13rem" backgroundColor="#FFC633"></Box>

        <Flex flexDirection="column" marginTop="20px" alignItems="center">
          <Flex
            h="450px"
            w="320px"
            backgroundColor="#FCF7F7"
            borderRadius="6px"
            flexDirection="column"
            alignItems="center"
          >
            <Text as="h2" fontSize="16px" color="#505565" textAlign="center">
              A equipe da Cokit nunca pedirá senha ou qualquer informação sigilosa.
            </Text>
            <Flex h="70%" flexDirection="column">
                <Flex mt="10px" h="2rem" backgroundColor="#DCF8C6" borderRadius="6px" padding=" 5px 10px 5px 10px" alignItems="center">
                    <Text as ="small" fontSize="14px" fontWeight="bold" color="#505565">
                        Preciso de ajuda!
                    </Text>
                </Flex>
                <Flex  mt="10px" h="2rem" backgroundColor="#9EF7F3" borderRadius="6px" padding=" 5px 10px 5px 10px" alignItems="center">
                    <Text as ="small" fontSize="14px" fontWeight="bold" color="#505565">
                        Conte-nos seu problema
                    </Text>
                </Flex>
                
            </Flex>
            <Flex
              marginTop="20px"
              alignItems="flex-end"
              justifyContent="center"
            >
              <Input
                type="name"
                h="40px"
                textIndent="10"
                w="16rem"
                color="#525050"
                fontWeight="600"
                border="none"
                backgroundColor="#322F38"
                borderRadius="6px"
                color="white"
              />
              <Icon
                as={BiChevronRight}
                fontSize="42px"
                color="#313131"
                backgroundColor="#FFC633"
                borderRadius="3px"
                ml="4px"
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
