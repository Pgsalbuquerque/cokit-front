import React from 'react'

import { Text, Flex, Box, Input, Button } from '@chakra-ui/react'
import Fundo from '../../assets/fundo.png'


export const ProdutosAnunciados = () => {
    return (
        <Flex backgroundImage={Fundo} h="100%" 
        backgroundRepeat="no-repeat" 
        backgroundSize="cover" 
        alignItems="center" 
        justifyContent="center" 
        flexDirection="column">
            <Box h="100px" w="100px" backgroundColor="#f4f5">
                <Box h="10px" w="10px" backgroundColor="#f78"></Box>
                <Box h="10px" w="10px" backgroundColor="blue"></Box>
            </Box>
            <Flex display="flex" alignItems="center" justifyContent="center" h="100px" w="100px" backgroundColor="#f43">
                <Box h="10px" w="10px" backgroundColor="#f78"></Box>
                <Box h="10px" w="10px" backgroundColor="blue"></Box>
            </Flex>
        </Flex>
    )
}