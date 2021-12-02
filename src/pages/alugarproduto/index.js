import React, {useState} from 'react'

import { Flex, Image, Text, Box, Icon, Button } from '@chakra-ui/react'
import { BiUserCircle, BiStar, BiLocationPlus, BiCoinStack, BiHourglass, BiChevronDown, BiChevronUp } from 'react-icons/bi'

import {DateButton} from "./date"

import ImageTest from '../../assets/imageteste1.png'

export const AlugarProduto = () => {
    const [mult, setMult] = useState(false)
    const [view, setView] = useState(false)
    return (
        <Flex flexDirection="column" alignItems="center" backgroundColor="#322F38" overflowY="hidden" overflow="auto" py="30px">
            <Image h="14rem" src={ImageTest} ></Image>
            <Text fontSize="20px" fontWeight="600" as="small" textAlign="center" color="#fff" mt="10px">Cozinha completa, perfeita para confeitaria.</Text>
            <Box h="2px" backgroundColor="#FFC633" w="60%" mt="20px"></Box>
            <Flex h="12rem" mt="20px">
                <Box w="2px" h="80%" backgroundColor="#FFC633" mr="20px"></Box>
                <Flex flexDirection="column" h="80%">
                    <Text as="small" color="#fff" fontWeight="600" mt="5px">Formas para bolo</Text>
                    <Text as="small" color="#fff" fontWeight="600" mt="5px">Ampola Saborizante</Text>
                    <Text as="small" color="#fff" fontWeight="600" mt="5px">Saco para Bico de Confeitar</Text>
                    <Text as="small" color="#fff" fontWeight="600" mt="5px">Cortador de Biscoito</Text>
                    <Text as="small" color="#fff" fontWeight="600" mt="5px">Forno</Text>
                    <Text as="small" color="#fff" fontWeight="600" mt="5px">Microondas</Text>
                    <Text as="small" color="#fff" fontWeight="600" mt="5px">Fogão 6 bocas...</Text>
                    <Text as="small" color="#FFC633" fontWeight="600" mt="5px">ver mais</Text>
                </Flex>
                <Box w="2px" h="80%" backgroundColor="#FFC633" ml="20px"></Box>
            </Flex>
            <Box h="2px" backgroundColor="#FFC633" w="60%" mt="-5px"></Box>
            <Flex flexDirection="column" alignItems="center">
                <Flex alignItems="center" mt="10px">
                    <Icon as={BiUserCircle} color="#FFC633" fontSize="24px"/>
                    <Text as="small" color="#fff" fontWeight="600" ml="10px">Wilson Amor</Text>
                    <Icon as={BiStar} color="#FFC633" fontSize="24px" ml="10px"/>
                    <Text as="small" color="#fff" fontWeight="600" ml="10px">4.9</Text>
                </Flex>
                <Flex alignItems="center" mt="10px">
                    <Icon as={BiLocationPlus} color="#FFC633" fontSize="24px"/>
                    <Text as="small" color="#fff" fontWeight="600" ml="10px">Recife, pernambuco</Text>
                    <Icon as={BiCoinStack} color="#FFC633" fontSize="24px" ml="10px"/>
                    <Text as="small" color="#fff" fontWeight="600" ml="10px">R$200,00/dia</Text>
                </Flex>
                <Flex alignItems="center" mt="10px">
                    <Icon as={BiHourglass} color="#FFC633" fontSize="24px"/>
                    <Text as="small" color="#fff" fontWeight="600" ml="10px">16/jan/21 - 30/abr/21</Text>
                </Flex>
                <Flex></Flex>
            </Flex>
            <Box h="2px" backgroundColor="#FFC633" w="60%" mt="10px"></Box>
            <Flex flexDirection="column" alignItems="center">
                <Text as="small" color="#fff" w="80%" fontWeight="600" mt="10px" fontSize="18px">Você pretende alugar por mais de 1 dia?</Text>
                <Flex alignItems="center" justifyContent="flex-end" mt="10px" w="80%">
                    <Button onClick={() => {
                        setMult(false)
                        setView(true)
                        }} border="none" w="80px" borderRadius="10px" backgroundColor="#fff" h="30px" rightIcon={<Icon as={BiChevronDown} color="#000" fontSize="20px"/>} mr="10px">Nao</Button>
                    <Button onClick={() => {
                        setMult(true)
                        setView(true)
                        }} border="none" w="80px" borderRadius="10px" backgroundColor="#FFC633" h="30px" rightIcon={<Icon as={BiChevronDown} color="#000" fontSize="20px"/>} mr="10px">Sim</Button>
                </Flex>
            </Flex>
            {view && < DateButton mult={mult}/>}
            <Box h="2px" backgroundColor="#FFC633" w="60%" mt="10px"></Box>
            <Text as="small" color="#fff" fontWeight="600" mt="10px" fontSize="16px">Estamos quase la...</Text>
            <Text as="small" color="#fff" fontWeight="600" fontSize="16px">Confirme se esta tudo certo</Text>
            <Flex w="60%" flexDirection="column">
                <Flex alignItems="center" mt="10px">
                    <Icon as={BiHourglass} color="#FFC633" fontSize="24px"/>
                    <Text as="small" color="#fff" fontWeight="600" ml="10px">22/jan/21 - 24/abr/21</Text>
                </Flex>
                <Flex alignItems="center" mt="10px">
                    <Icon as={BiLocationPlus} color="#FFC633" fontSize="24px"/>
                    <Text as="small" color="#fff" fontWeight="600" ml="10px">Recife, pernambuco</Text>
                </Flex>
                <Flex alignItems="center" mt="10px">
                    <Icon as={BiCoinStack} color="#FFC633" fontSize="24px"/>
                    <Text as="small" color="#fff" fontWeight="600" ml="10px">R$600,00</Text>
                </Flex>
            </Flex>
            <Flex w="80%" justifyContent="flex-end" mt="10px">
                <Button border="none" w="80px" borderRadius="10px" backgroundColor="#fff" h="30px" rightIcon={<Icon as={BiChevronUp} color="#000" fontSize="20px"/>} mr="10px">Voltar</Button>
                <Button border="none" w="110px" borderRadius="10px" backgroundColor="#FFC633" h="30px" rightIcon={<Icon as={BiChevronDown} color="#000" fontSize="20px"/>} mr="10px">Confirmar</Button>
            </Flex>
        </Flex>
    )
}