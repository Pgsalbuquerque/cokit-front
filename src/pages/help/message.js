import React from "react";
import { Text, Flex, Box, Input, Button, Icon } from "@chakra-ui/react";

const Message = ({ message }) => {

  return (
    <Flex
      mt="10px"
      h="2rem"
      backgroundColor="#DCF8C6"
      borderRadius="6px"
      padding=" 5px 10px 5px 10px"
      alignItems="center"
      justifyContent= "center"
    >
      <Text as="small" fontSize="14px" fontWeight="bold" color="#505565">
        {message.conteudo}
      </Text>
    </Flex>
  );
};

export default Message;
