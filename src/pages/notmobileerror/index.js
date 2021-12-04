import React from 'react'

import { Text, Flex, Image} from '@chakra-ui/react'
import Erro from '../../assets/erro.png'
import Logo from '../../assets/logo.png'

export const NotMobileError = () => {
    return (
        <Flex h="100%"
        w="100%"
        alignItems="center" 
        justifyContent="center" 
        flexDirection="column"
        backgroundColor="#FFDE59"
        >
            <Image src={Erro} w="300px" h="300px" />
            <Text fontFamily="Mada" as="small" color="#000" py="10px" px="20px" alignItems="center" borderRadius="10px" fontWeight="600" fontSize="30px" textAlign="center">Desculpe o inconveniente :(</Text>
            <Text as="small" mt="10px" color="#000" maxW="22rem" borderRadius="10px" fontWeight="600" fontSize="30px" py="10px" px="20px" textAlign="center">Nossa versão desktop está em desenvolvimento</Text>
            <Flex bottom="5px" left="5px" position="absolute" alignItems="center">
            <Image src={Logo} w="150px" h="150px"/>
            </Flex>
        </Flex>   
 )   
}