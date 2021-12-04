import React from 'react'

import { Flex, Icon, Input } from '@chakra-ui/react'
import { BiChevronDown } from 'react-icons/bi'

export const DateButton = (props) => {
    return (
        props.mult ? 
            <Flex mt="10px">
                <Input type="date" borderRadius="6px"/>
                <Input type="date" borderRadius="6px" ml="16px"/>
                <Icon as={BiChevronDown} fontSize="30px" backgroundColor="#ffd400" color="#000" borderRadius="6px" ml="10px"/>
            </Flex>
            :
            <Flex mt="10px">
                <Input type="date" borderRadius="6px"/>
                <Icon as={BiChevronDown} fontSize="30px" backgroundColor="#ffd400" color="#000" borderRadius="6px" ml="10px"/>
            </Flex>
    )
}