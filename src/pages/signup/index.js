import React from "react";
import {
  Text,
  Flex,
  Box,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import Fundo from "../../assets/fundo.png";
import { Link } from "react-router-dom";
import {
  BiChevronLeft,
  BiChevronDown,
  BiSearchAlt2,
  BiX,
} from "react-icons/bi";

export const SignUp = () => {
  const [abaAtiva, setAbaAtiva] = React.useState(0);
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
        <Flex
          h="400px"
          w="320px"
          backgroundColor="#FCF7F7"
          borderRadius="6px"
          flexDirection="column"
          alignItems="center"
        >
          <Flex justifyContent="space-around">
            <Flex alignItems="space-start" mt="10">
              <Icon as={BiChevronLeft} fontSize="30px" color="#FFC633" />
              <Text
                as={Link}
                to="/login"
                textDecoration="none"
                color="#FFC633"
                fontSize="17px"
                fontWeight="600"
              >
                voltar
              </Text>
            </Flex>
            <Flex flexDirection="column" alignItems="flex-end" mt="10">
              <Flex alignItems="center" mt="10">
                <Text
                  as="small"
                  to="/login"
                  textDecoration="none"
                  color="#505565"
                  fontSize="17px"
                  fontWeight="600"
                >
                  Dados Pessoais
                </Text>
                <Flex
                  backgroundColor="#FFC633"
                  ml="10px"
                  h="30px"
                  w="30px"
                  borderRadius="50%"
                  color="#ffffff"
                  alignItems="center"
                  justifyContent="center"
                >
                  1
                </Flex>
              </Flex>
              <Flex alignItems="center" mt="10">
                <Text
                  as="small"
                  to="/login"
                  textDecoration="none"
                  color="#505565"
                  fontSize="17px"
                  fontWeight="600"
                >
                  Dados de contato
                </Text>
                <Flex
                  backgroundColor="#FFC633"
                  ml="10px"
                  h="30px"
                  w="30px"
                  borderRadius="50%"
                  color="#ffffff"
                  alignItems="center"
                  justifyContent="center"
                >
                  2
                </Flex>
              </Flex>
              <Flex alignItems="center" mt="10">
                <Text
                  as="small"
                  to="/login"
                  textDecoration="none"
                  color="#505565"
                  fontSize="17px"
                  fontWeight="600"
                >
                  Dados de cadastro
                </Text>
                <Flex
                  backgroundColor="#FFC633"
                  ml="10px"
                  h="30px"
                  w="30px"
                  borderRadius="50%"
                  color="#ffffff"
                  alignItems="center"
                  justifyContent="center"
                >
                  3
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            flexDirection="column"
            w="16rem"
            backgroundColor="#FCF7F7"
            alignItems="center"
            borderRadius="10"
          >
            <Text
              as="small"
              textDecoration="none"
              color="#505565"
              fontSize="20px"
              fontWeight="600"
              backgroundColor="#FCF7F7"
            >
              Nome
            </Text>
            <Input
              type="name"
              ml="10"
              h="3rem"
              textIndent="10"
              w="16rem"
              color="#525050"
              fontWeight="600"
              border="none"
              backgroundColor="#FCF7F7"
            />
          </Flex>
          <Flex
            flexDirection="column"
            w="16rem"
            backgroundColor="#FCF7F7"
            alignItems="center"
            borderRadius="10"
          >
            <Text
              as="small"
              textDecoration="none"
              color="#505565"
              fontSize="20px"
              fontWeight="600"
              backgroundColor="#FCF7F7"
            >
              Cpf
            </Text>
            <Input
              type="name"
              ml="10"
              h="3rem"
              textIndent="10"
              w="16rem"
              color="#525050"
              fontWeight="600"
              border="none"
              backgroundColor="#FCF7F7"
            />
          </Flex>
          <Flex
            flexDirection="column"
            w="16rem"
            backgroundColor="FCF7F7"
            alignItems="center"
            borderRadius="10"
          >
            <Text
              as="small"
              textDecoration="none"
              color="#505565"
              fontSize="20px"
              fontWeight="600"
              backgroundColor="#FCF7F7"
            >
              Identidade
            </Text>
            <Input
              type="name"
              ml="10"
              h="3rem"
              textIndent="10"
              w="16rem"
              color="#525050"
              fontWeight="600"
              border="none"
              backgroundColor="#FCF7F7"
            />
          </Flex>
          <Flex
            flexDirection="column"
            w="16rem"
            backgroundColor="#FCF7F7"
            alignItems="center"
            borderRadius="10"
          >
            <Icon
              as={BiChevronDown}
              fontSize="30px"
              color="#313131"
              backgroundColor="#FFC633"
              borderRadius="3px"
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDirection="column" h="3rem">
        <Text
          as={Link}
          to="/signup"
          color="#fff"
          fontSize="18"
          textDecoration="none"
        >
          Algum problema ocorrido?
        </Text>
        <Text
          as={Link}
          to="/signup"
          color="#FFC633"
          fontSize="18"
          textDecoration="none"
        >
          Ajude-me
        </Text>
      </Flex>
    </Flex>
  );
};
