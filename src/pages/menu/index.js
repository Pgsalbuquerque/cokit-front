import React from 'react'

import {Flex,Text, Icon} from '@chakra-ui/react'
import {BiStoreAlt, BiShoppingBag, BiReceipt, BiCalendarCheck, BiPackage} from 'react-icons/bi'
import {Link} from 'react-router-dom'
export const Menu = () => {
    return (
        <Flex h="100%" w="100%" flexDirection="column">
            <Flex as={Link} to="/list" textDecoration="none" flexDirection="column" alignItems="center" justifyContent="center" backgroundColor="#ffd400" h="20%">
                <Icon as={BiStoreAlt} color="#000" fontSize="50" />
                <Text  fontWeight="600" fontSize="25"  color="#000" margin="0" display="flex" alignItems="center" justifyContent="center">Produtos</Text>
            </Flex>
            <Flex as={Link} to="/product/me/rented" textDecoration="none"  flexDirection="column" alignItems="center" justifyContent="center" backgroundColor="#ffd400" h="20%">
            <Icon as={BiShoppingBag} color="#000" fontSize="50" />
                <Text fontWeight="600" fontSize="25" color="#000" margin="0" display="flex" alignItems="center" justifyContent="center">Meus alugueis</Text>
            </Flex>
            <Flex as={Link} to="/product/me/registered" textDecoration="none"  flexDirection="column" alignItems="center" backgroundColor="#ffd400" justifyContent="center" h="20%">
                <Icon as={BiReceipt} color="#000" fontSize="50" />
                <Text  fontWeight="600" fontSize="25" color="#000" margin="0" display="flex" alignItems="center" justifyContent="center">Meus anuncios</Text>
            </Flex>
            <Flex as={Link} to="/product/me/rented2" textDecoration="none"  flexDirection="column" alignItems="center" backgroundColor="#ffd400" justifyContent="center" h="20%">
                <Icon as={BiCalendarCheck} color="#000" fontSize="50" />
                <Text  fontWeight="600" fontSize="25"  color="#000" margin="0" display="flex" alignItems="center" justifyContent="center">Meus anuncios alugados</Text>
            </Flex>
            <Flex as={Link} to="/product/me/register" textDecoration="none"  flexDirection="column" alignItems="center" backgroundColor="#ffd400" justifyContent="center" h="20%">
                <Icon as={BiPackage} color="#000" fontSize="50" />
                <Text  fontWeight="600" fontSize="25"  color="#000" margin="0" display="flex" alignItems="center" justifyContent="center">Anunciar</Text>
            </Flex>
        </Flex>
 )   
}