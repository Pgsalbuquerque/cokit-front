import React from 'react'

import { Text, Flex, Box, Input, Button } from '@chakra-ui/react'
import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import Fundo from '../../assets/fundo.png'
import { Link } from 'react-router-dom'


export const Login = () => {
    return (
        <Flex backgroundImage={Fundo} h="100%" 
        backgroundRepeat="no-repeat" 
        backgroundSize="cover" 
        alignItems="center" 
        justifyContent="space-evenly" 
        flexDirection="column">
            <Flex flexDirection="column" marginBottom="-40" alignItems="center">
                <Box h="2" w="13rem" backgroundColor="#FFC633"></Box>
                <Text as="h1" maxH="100" fontSize="40px" color="#fff">Cuzin do math</Text>
                <Box h="2" w="13rem" backgroundColor="#FFC633"></Box>
            </Flex>
            <Flex flexDirection="column" alignItems="left" h="15rem" justifyContent="space-evenly" marginTop="-40">
                <Flex w="16rem" backgroundColor="#fff" alignItems="center" borderRadius="10">
                    <EmailIcon ml="10"/>
                    <Input h="3rem" w="100%" ml="10" placeholder="Seu login aqui" color="#525050" fontWeight="600" border="none" borderRadius="10"/>
                </Flex>
                <Flex w="16rem" backgroundColor="#fff" alignItems="center" borderRadius="10">
                    <LockIcon ml="10"/>
                    <Input type="password" ml="10" h="3rem" textIndent="10" w="16rem" color="#525050" fontWeight="600" placeholder="Sua senha aqui" border="none"/>
                    <LockIcon mr="5" color="#f4f4"/>
                </Flex>
                <Button h="3rem" w="16rem" backgroundColor="#FFC633" border="none" fontSize="20" borderRadius="10">Entrar</Button>
                <Flex flexDirection="column" h="3rem">
                    <Text as={Link} to="/signup" color="#fff" fontSize="18" textDecoration="none">Ainda nao possui uma conta?</Text>
                    <Text as={Link} to="/signup" color="#FFC633" fontSize="18" textDecoration="none">cadastre-se</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}