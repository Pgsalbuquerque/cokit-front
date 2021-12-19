import React from "react";
import { Text, Flex} from "@chakra-ui/react";

const Message = ({ message }) => {
  const margin = message.enviou ? "0 10px 0 0" : "0 0 0 10px"
  const date = new Date(message.dataEnvio)
  return (
    <Flex
      mt="10px"
      w="100%"
      justifyContent= {message.enviou ? "flex-end" : "flex-start"}
    >
      <Flex maxW="80%" flexDirection="column" margin={margin} backgroundColor={message.enviou ? "#FFD400" : "#DCF8C6"} padding=" 5px 10px 5px 10px" alignItems="center" borderRadius="6px" minH="2rem">
        <Text as="small" fontSize="14px" fontWeight="bold" color="#505565">
          {message.mensagem}
        </Text>
        <Text w="100%" as="small" fontSize="11px" fontWeight="bold" color="#505565" textAlign="left">
          {`${date.getHours()}:${date.getMinutes()} - ${date.toLocaleDateString()}`}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Message;
