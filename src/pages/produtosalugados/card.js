import React from 'react'
import {Link} from "react-router-dom"

import { Flex, Image, Icon, Text, Button } from '@chakra-ui/react'
import { BiUserCircle, BiStar, BiHourglass, BiLocationPlus, BiCoinStack } from 'react-icons/bi'

export const Card = (props) => {
    return (
        <Flex border="2px solid #ffd400" minH="11rem" py={5} alignItems="center" justifyContent="space-evenly" borderRadius="10" mt="10" backgroundColor="#FCF7F7" ml="10px" mr="10px">
            <Flex w="50%" alignItems="center" justifyContent="center">
                <Image maxH="150px" maxW="150px" src={props.imagem} borderRadius="6"></Image>
            </Flex>
            <Flex w="50%" h="100%" flexDirection="column" alignItems="flex-start" justifyContent="space-evenly">
                <Flex alignItems="center">
                    <Icon as={BiUserCircle} color="#ffd400" fontSize="20px" />
                    <Text ml="4" fontSize="14" color="#525050" fontWeight="600" as="small">{props.locatario.nome}</Text>
                    <Icon as={BiStar} color="#ffd400" fontSize="20px" ml="4" />
                    <Text ml="4" fontSize="14" color="#525050" fontWeight="600" as="small">{props.avaliacao == null ? "5.0" : props.avaliacao + ".0"}</Text>
                </Flex>
                <Flex alignItems="center">
                    <Icon as={BiHourglass} color="#ffd400" fontSize="20px" />
                    <Text ml="4" fontSize="14" color="#525050" fontWeight="600" as="small">{props.datas.dataInicial}</Text>
                </Flex>
                <Flex alignItems="center">
                    <Icon as={BiLocationPlus} color="#ffd400" fontSize="20px" />
                    <Text ml="4" fontSize="14" color="#525050" fontWeight="600" as="small">{props.local}</Text>
                </Flex>
                <Flex alignItems="center">
                    <Icon as={BiCoinStack} color="#ffd400" fontSize="22px" />
                    <Text ml="4" fontSize="16" color="#525050" fontWeight="600" as="small">{`R$ ${props.preco},00`}</Text>
                </Flex>
                <Flex alignSelf="center" w="90%" justifyContent="space-between">
                    <Button as={Link} maxW="55%" to={`/chat/${props.locatario.id}`} textDecoration="none" h="2rem" w="100%" border="none" borderRadius="6px" backgroundColor="#ffd400" fontWeight="600" color="#322F38">Conversar</Button>
                    <Button as={Link} maxW="40%" to={`/product/feedback/${props.idp}`} textDecoration="none" h="2rem" w="100%" border="none" borderRadius="6px" backgroundColor="#ffd400" fontWeight="600" color="#322F38">Avaliar</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}