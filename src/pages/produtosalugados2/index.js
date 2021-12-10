import React from 'react'

import { Text, Flex, Input, Icon, Button } from '@chakra-ui/react'
import { BiChevronLeft, BiSearchAlt2, BiX, BiArrowBack } from 'react-icons/bi'

import { Card } from './card'
import { Link } from 'react-router-dom'

export const ProdutosAlugados2 = () => {
    return (
        <Flex flexDirection="column" h="100%" backgroundColor="#322F38" overflowY="hidden" overflow="auto"> 
            <Flex alignItems="center" mt="20" maxH="30px" ml="20px">
                <Button as={Link} to="/login">
                    <Icon as={BiArrowBack} fontSize="25px" color="#ffd400" />
                </Button>
                <Flex w="80%" justifyContent="center" alignItems="center" ml="10" >
                    <Text color="#FFD400" fontWeight="600" fontSize="22px">Produtos alugados2</Text>
                </Flex>
            </Flex>
            <Flex flexDirection="column" padding="10">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Flex>
        </Flex>
    )
}