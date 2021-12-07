import React, {useState} from 'react'

import { Flex, Image, Text, Box, Icon, Button } from '@chakra-ui/react'
import { BiUserCircle, BiStar, BiLocationPlus, BiCoinStack, BiHourglass, BiChevronDown, BiChevronUp } from 'react-icons/bi'
import {BsFillCircleFill} from 'react-icons/bs'
import {DateButton} from "./date"

import ImageTest from '../../assets/imageteste1.png'

export const AlugarProduto = () => {
    const [mult, setMult] = useState(false)
    const [view, setView] = useState(false)
    return (
        <Flex flexDirection="column" alignItems="center" backgroundColor="#322F38" overflowY="hidden" overflow="auto" py="30px">
            <Image h="14rem" src={ImageTest} w ="80%"></Image>
            <Text fontSize="20px" fontWeight="600" as="small" textAlign="center" color="#fff" mt="10px">Cozinha completa, perfeita para confeitaria.</Text>
            <Flex flexDirection="column" Maxh="220px" backgroundColor="#505565" w="100%" mt="8px" boxShadow="0 0 1em #505565">
                <Flex ml="12px " flexDirection="column">
                    <Flex alignItems="center">
                        <Icon as={BsFillCircleFill} color="#ffd400" fontSize="6px" mr="8px" mt="2px"/> 
                        <Text as="small" color="#FCF7F7" fontWeight="600" mt="5px" fontSize="14px">Formas para bolo</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Icon as={BsFillCircleFill} color="#ffd400" fontSize="6px" mr="8px" mt="2px"/> 
                        <Text as="small" color="#FCF7F7" fontWeight="600" mt="5px" fontSize="14px">Saco para Bico de Confeitar</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Icon as={BsFillCircleFill} color="#ffd400" fontSize="6px" mr="8px" mt="2px"/> 
                        <Text as="small" color="#FCF7F7" fontWeight="600" mt="5px" fontSize="14px">Forno</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Icon as={BsFillCircleFill} color="#ffd400" fontSize="6px" mr="8px" mt="2px"/> 
                        <Text as="small" color="#FCF7F7" fontWeight="600" mt="5px" fontSize="14px">Microondas</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Icon as={BsFillCircleFill} color="#ffd400" fontSize="6px" mr="8px" mt="2px"/> 
                        <Text as="small" color="#FCF7F7" fontWeight="600" mt="5px" fontSize="14px">Fogão 6 bocas...</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Icon as={BsFillCircleFill} color="#ffd400" fontSize="6px" mr="8px" mt="2px"/> 
                        <Text as="small" color="#FCF7F7" fontWeight="600" mt="5px" fontSize="14px">Cortador de Biscoitos</Text>
                    </Flex>
                    <Text as="small" color="#ffd400" fontWeight="600" mt="5px" alignSelf= "flex-end" mr="6px" mb="4px">ver mais</Text>
                </Flex>
            </Flex>
            <Flex flexDirection="column" Maxh="220px" backgroundColor="#505565" w="100%" mt="16px" boxShadow="4px 4px 4px #505565">
                <Flex flexDirection="column" alignItems="flex-start">
                    <Flex alignItems="center" mt="10px">
                        <Icon as={BiUserCircle} color="#ffd400" fontSize="24px"/>
                        <Text as="small" color="#FCF7F7" fontWeight="600" ml="10px">Wilson Amor</Text>
                        <Icon as={BiStar} color="#ffd400" fontSize="24px" ml="10px"/>
                        <Text as="small" color="#FCF7F7" fontWeight="600" ml="10px">4.9</Text>
                    </Flex>
                    <Flex alignItems="center" mt="10px">
                        <Icon as={BiLocationPlus} color="#ffd400" fontSize="24px"/>
                        <Text as="small" color="#FCF7F7" fontWeight="600" ml="10px">Recife, pernambuco</Text>
                        <Icon as={BiCoinStack} color="#FFC633" fontSize="24px" ml="10px"/>
                        <Text as="small" color="#FCF7F7" fontWeight="600" ml="10px">R$200,00/dia</Text>
                    </Flex>
                    <Flex alignItems="center" mt="10px">
                        <Icon as={BiHourglass} color="#FFC633" fontSize="24px"/>
                        <Text as="small" color="#FCF7F7" fontWeight="600" ml="10px">16/jan/21 - 30/abr/21</Text>
                    </Flex>
   
            </Flex>
            </Flex>
            <Box h="2px" backgroundColor="#FFC633" w="60%" mt="10px"></Box>
            <Flex flexDirection="column" alignItems="center">
                <Text as="small" color="#505565" w="80%" fontWeight="600" mt="10px" fontSize="18px">Você pretende alugar por mais de 1 dia?</Text>
                <Flex alignItems="center" justifyContent="flex-end" mt="10px" w="80%">
                    <Button onClick={() => {
                        setMult(false)
                        setView(true)
                        }} border="none" w="80px" borderRadius="10px" backgroundColor="#505565" h="30px" rightIcon={<Icon as={BiChevronDown} color="#000" fontSize="20px"/>} mr="10px">Nao</Button>
                    <Button onClick={() => {
                        setMult(true)
                        setView(true)
                        }} border="none" w="80px" borderRadius="10px" backgroundColor="#FFC633" h="30px" rightIcon={<Icon as={BiChevronDown} color="#000" fontSize="20px"/>} mr="10px">Sim</Button>
                </Flex>
            </Flex>
            {view && < DateButton mult={mult}/>}
            <Box h="2px" backgroundColor="#FFC633" w="60%" mt="10px"></Box>
            <Text as="small" color="#505565" fontWeight="600" mt="10px" fontSize="16px">Estamos quase la...</Text>
            <Text as="small" color="#505565" fontWeight="600" fontSize="16px">Confirme se esta tudo certo</Text>
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