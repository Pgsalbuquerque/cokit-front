import React from "react";

import { useState } from "react";

import { Text, Flex, Box, Input, Button, Icon } from "@chakra-ui/react";
import Fundo from "../../assets/fundo.png";
import { BiChevronRight } from "react-icons/bi";
import Messages from "./messages";

export const Ajuda = () => {
  const [inputData, setInputData] = useState("");

  const [messages, setMessages] = useState([]);

  const handleAddMessageClick = () => {
    handleTaskAddition(inputData);
    setInputData("");
  };

  const handleTaskAddition = (texto) => {
    const newMessages = [
      ...messages,
      {
        conteudo: texto,
        date: new Date(),
        client: true
      },
    ];
    setMessages(newMessages);
  };
  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

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
        <Box h="2" w="13rem" backgroundColor="#ffd400"></Box>
        <Text as="h1" maxH="100" fontSize="40px" color="#fff">
          Ajuda
        </Text>
        <Box h="2" w="13rem" backgroundColor="#ffd400"></Box>

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
              A equipe da Cokit nunca pedirá senha ou qualquer informação
              sigilosa.
            </Text>
            <Flex h="70%" w="100%" flexDirection="column" overflowY="auto" overflow="auto">
              {/* <Flex
                mt="10px"
                h="2rem"
                backgroundColor="#DCF8C6"
                borderRadius="6px"
                padding=" 5px 10px 5px 10px"
                alignItems="center"
              >
                <Text
                  as="small"
                  fontSize="14px"
                  fontWeight="bold"
                  color="#505565"
                >
                  Preciso de ajuda!
                </Text>
              </Flex> */}
              <Messages
                    messages={messages}
                />
            </Flex>
            <Flex
              marginTop="20px"
              alignItems="flex-end"
              justifyContent="center"
              mb="8px"
            >
              <Input
                ml="8px"
                type="name"
                h="40px"
                textIndent="10"
                w="15rem"
                color="#525050"
                fontWeight="600"
                border="none"
                backgroundColor="#322F38"
                borderRadius="6px"
                color="white"
                value={inputData}
                onChange={handleInputChange}
              />
              <Button onClick={handleAddMessageClick} border="none">
                <Icon
                  as={BiChevronRight}
                  fontSize="42px"
                  color="#313131"
                  backgroundColor="#ffd400"
                  borderRadius="3px"
                  ml="2px"
                />
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
