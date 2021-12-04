import React from 'react'

import { Text, Flex, Input, Icon, Button } from '@chakra-ui/react'
import { BiChevronLeft, BiSearchAlt2, BiX, BiArrowBack } from 'react-icons/bi'

import { Card } from './card'
import { Link } from 'react-router-dom'

export const Main = () => {
    return (
        <Flex flexDirection="column" h="100%" backgroundColor="#322F38" overflowY="hidden" overflow="auto"> 
            <Flex alignItems="center" mt="20" maxH="30px" ml="20px">
                <Button as={Link} to="/login">
                    <Icon as={BiArrowBack} fontSize="25px" color="#FFC633" />
                </Button>
                <Flex w="80%" backgroundColor="#FCF7F7" alignItems="center" borderRadius="6" ml="10" >
                    <Icon as={BiSearchAlt2} ml="10" fontSize="16px"/>
                    <Input h="2rem" w="100%" ml="10" placeholder="O que você está procurando?" outline="none" color="#525050" fontWeight="600" border="none" borderRadius="10"/>
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