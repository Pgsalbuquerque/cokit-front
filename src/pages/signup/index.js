import React, { useState } from "react";
import {
  Text,
  Flex,
  Box,
  Button,
  Icon,
} from "@chakra-ui/react";
import Fundo from "../../assets/fundo.png";
import { Link } from "react-router-dom";
import { BiArrowBack, BiChevronDown, BiChevronRight } from 'react-icons/bi'
 
import {Etapas} from "./etapa1"
 
export const SignUp = () => {
  const [etapa, setEtapa] = useState(1)
 
  const handleSubmit = () => {}
 
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
          COKIT
        </Text>
        <Box h="2" w="13rem" backgroundColor="#FFC633"></Box>
      </Flex>
        <Flex flexDirection="column" marginTop="20px" alignItems="center">
            <Flex h="400px" w="320px" backgroundColor="#FCF7F7" borderRadius="6px" flexDirection="column" alignItems="center">
                <Flex w="100%" alignItems="space-start" justifyContent="space-around">
                    <Flex alignItems="center" mt="20" maxH="30px">
                      <Button as={Link} to="/login">
                        <Icon as={BiArrowBack} fontSize="25px" color="#FFC633" />
                      </Button>
                    </Flex>
                    <Flex flexDirection="column" alignItems="flex-end" mt="10" >
                        <Flex alignItems="center" mt="10">
                            <Text as="small" to="/login" textDecoration="none" color="#505565" fontSize="17px" fontWeight="600">Dados Pessoais</Text>
                            <Flex border={`2px solid ${ etapa >= 1 ? "#FFC633" : "#DDDDDD"}`} ml="10px" h="20px" color={ etapa >= 1 ? "#FFC633" : "#DDDDDD"}  w="20px" borderRadius="50%" alignItems="center" justifyContent="center">1</Flex>
                        </Flex>
                        <Flex alignItems="center" mt="10">
                            <Text as="small" to="/login" textDecoration="none" color="#505565" fontSize="17px" fontWeight="600">Dados de contato</Text>
                            <Flex border={`2px solid ${ etapa >= 2 ? "#FFC633" : "#DDDDDD"}`} ml="10px" h="20px" color={ etapa >= 2 ? "#FFC633" : "#DDDDDD"} w="20px" borderRadius="50%" alignItems="center" justifyContent="center">2</Flex>
                        </Flex>
                        <Flex alignItems="center" mt="10">
                            <Text as="small" to="/login" textDecoration="none" color="#505565" fontSize="17px" fontWeight="600">Dados de cadastro</Text>
                            <Flex border={`2px solid ${ etapa >= 3 ? "#FFC633" : "#DDDDDD"}`} ml="10px" h="20px" color={ etapa >= 3 ? "#FFC633" : "#DDDDDD"} w="20px" borderRadius="50%" alignItems="center" justifyContent="center">3</Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Etapas etapa={etapa}/>
                <Flex mt="10px" justifyContent="flex-end" w="16rem" backgroundColor="#FCF7F7" borderRadius="10">
                    { etapa < 3 ? 
                      <Icon onClick={() => setEtapa(etapa+1)} as={BiChevronDown} fontSize="30px" color="#313131" backgroundColor="#FFC633" borderRadius="3px"/>
                      : <Button onClick={handleSubmit} h="2rem" w="35%" border="none" borderRadius="6px" backgroundColor="#FFC633" fontWeight="600" color="#322F38" rightIcon={<Icon as={BiChevronRight} fontSize="20px" color="#322F38"/>} >Enviar</Button>
                    }
                </Flex>
            </Flex>
        </Flex>
        <Flex h="3rem" w="18rem" mt="10px">
            <Text as="small" color="#fff" fontSize="18" textDecoration="none">Algum problema ocorrido?</Text>
            <Text ml="4px" as={Link} to="/signup" fontWeight="bold" color="#FFC633" fontSize="18" textDecoration="none">Ajude-me</Text>
        </Flex>
    </Flex>
  );
};