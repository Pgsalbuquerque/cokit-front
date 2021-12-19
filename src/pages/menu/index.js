import React from 'react'

import {Flex,Text, Icon} from '@chakra-ui/react'
import {BiStoreAlt, BiShoppingBag, BiReceipt, BiCalendarCheck, BiPackage} from 'react-icons/bi'
import {IoIosLogOut} from 'react-icons/io'

import {Link} from 'react-router-dom'
export const Menu = () => {
    return (
        <Flex h="100%" w="100%" flexDirection="column">
            <Flex backgroundColor="#ffd400" justifyContent="flex-end" as={Link} to="/login">
                <Icon as={IoIosLogOut} color="#000" fontSize="40" mt="10px" mr="10px" onClick={() => {localStorage.removeItem('cokitsession')}} />
            </Flex>
            <Flex as={Link} to="/list" textDecoration="none" flexDirection="column" alignItems="center" justifyContent="center" backgroundColor="#ffd400" h="20%">
                <Icon as={BiStoreAlt} color="#000" fontSize="50" />
                <Text  fontWeight="600" fontSize="25"  color="#000" margin="0" display="flex" alignItems="center" justifyContent="center">Produtos</Text>
            </Flex>
            <Flex as={Link} to="/product/me/rented" textDecoration="none"  flexDirection="column" alignItems="center" justifyContent="center" backgroundColor="#ffd400" h="20%">
            <Icon as={BiShoppingBag} color="#000" fontSize="50" />
                <Text fontWeight="600" fontSize="25" color="#000" margin="0" display="flex" alignItems="center" justifyContent="center">Meus aluguéis</Text>
            </Flex>
            <Flex as={Link} to="/product/me/registered" textDecoration="none"  flexDirection="column" alignItems="center" backgroundColor="#ffd400" justifyContent="center" h="20%">
                <Icon as={BiReceipt} color="#000" fontSize="50" />
                <Text  fontWeight="600" fontSize="25" color="#000" margin="0" display="flex" alignItems="center" justifyContent="center">Meus anúncios</Text>
            </Flex>
            <Flex as={Link} to="/product/me/rented2" textDecoration="none"  flexDirection="column" alignItems="center" backgroundColor="#ffd400" justifyContent="center" h="20%">
                <Icon as={BiCalendarCheck} color="#000" fontSize="50" />
                <Text  fontWeight="600" fontSize="25"  color="#000" margin="0" display="flex" alignItems="center" justifyContent="center">Meus anúncios alugados</Text>
            </Flex>
            <Flex as={Link} to="/product/me/register" textDecoration="none"  flexDirection="column" alignItems="center" backgroundColor="#ffd400" justifyContent="center" h="20%">
                <Icon as={BiPackage} color="#000" fontSize="50" />
                <Text  fontWeight="600" fontSize="25"  color="#000" margin="0" display="flex" alignItems="center" justifyContent="center">Anunciar</Text>
            </Flex>
        </Flex>
 )   
}