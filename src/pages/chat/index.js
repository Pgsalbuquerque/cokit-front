import React, { useEffect, useState } from "react";


import { Text, Flex, Box, Input, Button, Icon } from "@chakra-ui/react";
import Fundo from "../../assets/fundo.png";
import { BiChevronRight, BiArrowBack } from "react-icons/bi";
import {useParams, Link} from 'react-router-dom'
import Messages from "./messages";
import api from '../../api'
export const Chat = () => {
  const [inputData, setInputData] = useState("");
  const [messages, setMessages] = useState([]);

  const handleAddMessageClick = () => {
    handleTaskAddition(inputData);
    setInputData("");
  };
  const params = useParams()

  useEffect(() => {
    api.get("/mensagens", {
      headers: {
        Authorization: localStorage.getItem("cokitsession")
      }
    }).then(r => r.data.forEach(bloco => { 
      if(bloco.usuarioId == params.user_id) {
        setMessages(bloco.mensagens)
      }
    }))
  }, [])

  

  const handleTaskAddition = (texto) => {
    api.post("/mensagens", {
      destinatarioID: params.user_id,
      mensagem: texto
    }, {
      headers: {
        Authorization: localStorage.getItem("cokitsession")
      }
    }).then(r => {
      const date = new Date()
      const newMessages = [
        ...messages,
        {
          mensagem: texto,
          dataEnvio: date,
          enviou: true,
        },
      ];
      setMessages(newMessages);
    })
    
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
      <Flex h="90%" flexDirection="column" marginTop="20px" alignItems="center">
        <Button as={Link} to="/menu" w="100%" h="50px" alignItems="center" justifyContent="flex-start">
          <Icon as={BiArrowBack} fontSize="25px" color="#ffd400" />
        </Button>
        <Box h="2" w="13rem" backgroundColor="#ffd400"></Box>
        <Text as="h1" maxH="100" margin={10} fontSize="40px" color="#fff">
          Chat
        </Text>
        <Box h="2" w="13rem" backgroundColor="#ffd400"></Box>

        <Flex h="100%" flexDirection="column" marginTop="20px" alignItems="center">
          <Flex
            h="100%"
            w="320px"
            backgroundColor="#FCF7F7"
            borderRadius="6px"
            flexDirection="column"
            alignItems="center"
          >
            <Text as="h2" fontSize="16px" color="#505565" textAlign="center">
              Nunca envie senha ou qualquer informação
              sigilosa para alguem.
            </Text>
            {/* <Text as="small" fontSize="16px" color="#505565" textAlign="center">
              Wilson Wagner
            </Text> */}
            <Flex h="70%" w="100%" flexDirection="column" overflowY="auto" overflow="auto">
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
                h="40px"
                textIndent="20px"
                w="15rem"
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
