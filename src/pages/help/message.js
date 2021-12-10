import React from "react";
import { Text, Flex} from "@chakra-ui/react";

const Message = ({ message }) => {
  const margin = message.client ? "0 10px 0 0" : "0 0 0 10px"
  return (
    <Flex
      mt="10px"
      w="100%"
      justifyContent= {message.client ? "flex-end" : "flex-start"}
    >
      <Flex maxW="80%" flexDirection="column" margin={margin} backgroundColor={message.client ? "#FFD400" : "#DCF8C6"} padding=" 5px 10px 5px 10px" alignItems="center" borderRadius="6px" minH="2rem">
        <Text as="small" fontSize="14px" fontWeight="bold" color="#505565">
          {message.conteudo}
        </Text>
        <Text w="100%" as="small" fontSize="11px" fontWeight="bold" color="#505565" textAlign="left">
          {`${message.date.getHours()}:${message.date.getMinutes()}`}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Message;
