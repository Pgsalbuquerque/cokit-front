import React from 'react'
import {Link} from "react-router-dom"

import { Flex, Image, Icon, Text, Button } from '@chakra-ui/react'
import { BiUserCircle, BiStar, BiHourglass, BiLocationPlus, BiCoinStack, BiChevronRight } from 'react-icons/bi'
import ImageTest from '../../assets/imageteste1.png'

export const Card = () => {
    return (
        <Flex border="2px solid #ffd400" h="11rem" alignItems="center" justifyContent="space-evenly" borderRadius="10" mt="10" backgroundColor="#FCF7F7" ml="10px" mr="10px">
            <Flex w="50%" alignItems="center" justifyContent="center">
                <Image h="150px" src={ImageTest} borderRadius="6"></Image>
            </Flex>
            <Flex w="50%" h="100%" flexDirection="column" alignItems="flex-start" justifyContent="space-evenly">
                <Flex alignItems="center">
                    <Icon as={BiUserCircle} color="#ffd400" fontSize="20px" />
                    <Text ml="4" fontSize="14" color="#525050" fontWeight="600" as="small">Wilson Wagner</Text>
                    <Icon as={BiStar} color="#ffd400" fontSize="20px" ml="4" />
                    <Text ml="4" fontSize="14" color="#525050" fontWeight="600" as="small">4.9</Text>
                </Flex>
                <Flex alignItems="center">
                    <Icon as={BiHourglass} color="#ffd400" fontSize="20px" />
                    <Text ml="4" fontSize="14" color="#525050" fontWeight="600" as="small">18/jan/21 - 21/abr/21</Text>
                </Flex>
                <Flex alignItems="center">
                    <Icon as={BiLocationPlus} color="#ffd400" fontSize="20px" />
                    <Text ml="4" fontSize="14" color="#525050" fontWeight="600" as="small">Recife, pernambuco</Text>
                </Flex>
                <Flex alignItems="center">
                    <Icon as={BiCoinStack} color="#ffd400" fontSize="22px" />
                    <Text ml="4" fontSize="16" color="#525050" fontWeight="600" as="small">R$ 600,00</Text>
                </Flex>
                <Flex alignSelf="center" w="90%">
                    <Button as={Link} to="/product/asdasd" textDecoration="none" h="2rem" w="100%" border="none" borderRadius="6px" backgroundColor="#ffd400" fontWeight="600" color="#322F38">Remover anuncio</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}