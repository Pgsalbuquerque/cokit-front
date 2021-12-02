import React from 'react'

import { Text, Flex, Input, Icon } from '@chakra-ui/react'
import { BiChevronLeft, BiSearchAlt2, BiX } from 'react-icons/bi'

import { Card } from './card'
import { Link } from 'react-router-dom'

export const Main = () => {
    return (
        <Flex flexDirection="column" h="100%" backgroundColor="#322F38" overflowY="hidden" overflow="auto"> 
            <Flex alignItems="center" mt="10">
                <Icon as={BiChevronLeft} fontSize="30px" color="#FFC633" />
                <Text as={Link} to="/login" textDecoration="none" color="#FFC633" fontSize="17px" fontWeight="600">voltar</Text>
            </Flex>
            <Flex flexDirection="column" w="100%" alignItems="center" mt="10">
                <Flex w="80%" backgroundColor="#fff" alignItems="center" borderRadius="6">
                    <Icon as={BiSearchAlt2} ml="10" fontSize="16px"/>
                    <Input h="2rem" w="100%" ml="10" placeholder="Seu login aqui" outline="none" color="#525050" fontWeight="600" border="none" borderRadius="10"/>
                </Flex>
                <Flex mt="2px" w="80%">
                    <Flex backgroundColor="#fff" alignItems="center" px="6">
                        <Text as="small" color="#322F38" fontSize="14px" fontWeight="600">Cozinha</Text>
                        <Icon as={BiX} fontSize="16px" color="#322F38" />
                    </Flex>
                    <Flex backgroundColor="#fff" alignItems="center" ml="10" px="6">
                        <Text as="small" color="#322F38" fontSize="14px" fontWeight="600">Confeitaria</Text>
                        <Icon as={BiX} fontSize="16px" color="#322F38" />
                    </Flex>
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