import React from 'react'

import { Text, Flex, Box, Input, Button } from '@chakra-ui/react'
import Fundo from '../../assets/fundo.png'


export const ProdutosAlugados = () => {
    return (
        <Flex backgroundImage={Fundo} h="100%" 
        backgroundRepeat="no-repeat" 
        backgroundSize="cover" 
        alignItems="center" 
        justifyContent="center" 
        flexDirection="column">
            <Box h="2" w="16rem" backgroundColor="#FFC633"></Box>
            <Text fontSize="40px" color="#fff">Cuzinha do math</Text>
            <Box h="2" w="16rem" backgroundColor="#FFC633"></Box>
            <Input h="2.3rem" w="280px" placeholder="Seu cpf aqui">

            </Input>
            <Input h="2.3rem" w="280px" placeholder="Sua senha aqui">

            </Input>
            <Button h="2.3rem" w="280px" backgroundColor="#FFC633">Entrar</Button>
        </Flex>
    )
}