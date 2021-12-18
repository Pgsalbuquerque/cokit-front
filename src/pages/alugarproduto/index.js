import React, {useState, useEffect} from 'react'

import { Flex, Image, Text, Box, Icon, Button, Input } from '@chakra-ui/react'
import { BiUserCircle, BiStar, BiLocationPlus, BiCoinStack, BiHourglass, BiChevronDown, BiChevronUp, BiArrowBack } from 'react-icons/bi'
import {BsFillCircleFill} from 'react-icons/bs'
import {useParams, useHistory, Link} from 'react-router-dom'
import api from '../../api'
import ImageTest from '../../assets/imageteste1.png'

export const AlugarProduto = () => {
    const [mult, setMult] = useState(false)
    const [view, setView] = useState(false)

    const [dataInicial, setDataInicial] = useState(null)
    const [dataFinal, setDataFinal] = useState(null)

    const [produto, setProduto] = useState({}) 
    const params = useParams()
    const history = useHistory()
    useEffect(() => {
        api.get("/produtos/" + params.product_id)
        .then(r => setProduto(r.data))
    }, [])
    console.log(produto)

    const handleSubmit = () => {

        const payload = dataFinal ? {unicoDia: false, dataInicial, dataFinal} : {unicoDia: true, dataInicial}

        api.post("/produtos/" + params.product_id + "/alugar", payload, {
            headers: {
                Authorization: localStorage.getItem("cokitsession")
            }
        })
        .then(r => history.push("/menu"))
    }

    return (
        <Flex flexDirection="column" alignItems="center" backgroundColor="#322F38" overflowY="hidden" overflow="auto" pb="30px">
            <Flex w="100%" justifyContent="flex-start" alignItems="center" h="50px" ml="20">
                <Button as={Link} to="/menu">
                    <Icon as={BiArrowBack} fontSize="25px" color="#ffd400" />
                </Button>
                <Text color="#FFD400" fontWeight="600" fontSize="22px" ml="80px"> Alugar produto</Text>
            </Flex>
            <Image h="14rem" src={ImageTest} w ="80%"></Image>
            <Text fontSize="20px" fontWeight="600" as="small" textAlign="center" color="#fff" mt="10px">{produto.nome}</Text>
            <Flex flexDirection="column" Maxh="220px" w="100%" mt="8px" ml="50">
                <Flex ml="12px " flexDirection="column">
                    <Flex alignItems="center">
                        <Icon as={BsFillCircleFill} color="#ffd400" fontSize="6px" mr="8px" mt="2px"/> 
                        <Text as="small" color="#FCF7F7" fontWeight="600" mt="5px" fontSize="14px">{produto.descricao}</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex flexDirection="column" Maxh="220px" w="100%" mt="16px"  alignItems="center">
                <Flex flexDirection="column" alignItems="flex-start">
                    <Flex alignItems="center" mt="10px">
                        <Icon as={BiUserCircle} color="#ffd400" fontSize="24px"/>
                        <Text as="small" color="#FCF7F7" fontWeight="600" ml="10px">{produto.locatario ? produto.locatario.nome : ""}</Text>
                        <Icon as={BiStar} color="#ffd400" fontSize="24px" ml="10px"/>
                        <Text as="small" color="#FCF7F7" fontWeight="600" ml="10px">4.9</Text>
                    </Flex>
                    <Flex alignItems="center" mt="10px">
                        <Icon as={BiLocationPlus} color="#ffd400" fontSize="24px"/>
                        <Text as="small" color="#FCF7F7" fontWeight="600" ml="10px">{produto.local}</Text>
                        <Icon as={BiCoinStack} color="#FFC633" fontSize="24px" ml="10px"/>
                        <Text as="small" color="#FCF7F7" fontWeight="600" ml="10px">{`R$${produto.preco},00/dia`}</Text>
                    </Flex>
                    <Flex alignItems="center" mt="10px">
                        <Icon as={BiHourglass} color="#FFC633" fontSize="24px"/>
                        <Text as="small" color="#FCF7F7" fontWeight="600" ml="10px">16/jan/21 - 30/abr/21</Text>
                    </Flex>
   
            </Flex>
            </Flex>
            <Box h="2px" backgroundColor="#FFC633" w="60%" mt="10px"></Box>
            <Flex flexDirection="column" alignItems="center">
                <Text as="small" color="#FCF7F7" w="80%" fontWeight="600" mt="10px" fontSize="18px">Você pretende alugar por mais de 1 dia?</Text>
                <Flex alignItems="center" justifyContent="flex-end" mt="10px" w="80%">
                    <Button onClick={() => {
                        setMult(false)
                        setView(true)
                        }} border="none" w="80px" borderRadius="10px" backgroundColor="#FCF7F7" h="30px" rightIcon={<Icon as={BiChevronDown} color="#000" fontSize="20px"/>} mr="10px">Nao</Button>
                    <Button onClick={() => {
                        setMult(true)
                        setView(true)
                        }} border="none" w="80px" borderRadius="10px" backgroundColor="#FFC633" h="30px" rightIcon={<Icon as={BiChevronDown} color="#000" fontSize="20px"/>} mr="10px">Sim</Button>
                </Flex>
            </Flex>
            {view ? mult ? 
            <Flex mt="10px">
                <Input type="date" borderRadius="6px" onChange={e => setDataInicial(e.target.value)}/>
                <Input type="date" borderRadius="6px" ml="16px" onChange={e => setDataFinal(e.target.value)}/>
                <Icon as={BiChevronDown} fontSize="30px" backgroundColor="#ffd400" color="#000" borderRadius="6px" ml="10px"/>
            </Flex>
            :
            <Flex mt="10px">
                <Input type="date" borderRadius="6px" onChange={e => setDataInicial(e.target.value)}/>
                <Icon as={BiChevronDown} fontSize="30px" backgroundColor="#ffd400" color="#000" borderRadius="6px" ml="10px"/>
            </Flex> : <></>}
            <Box h="2px" backgroundColor="#FFC633" w="60%" mt="10px"></Box>
            <Text as="small" color="#FCF7F7" fontWeight="600" mt="10px" fontSize="16px">Estamos quase la...</Text>
            <Text as="small" color="#FCF7F7" fontWeight="600" fontSize="16px">Confirme se esta tudo certo</Text>
            <Flex w="60%" flexDirection="column">
                <Flex alignItems="center" mt="10px">
                    <Icon as={BiHourglass} color="#FFC633" fontSize="24px"/>
                    <Text as="small" color="#fff" fontWeight="600" ml="10px">22/jan/21 - 24/abr/21</Text>
                </Flex>
                <Flex alignItems="center" mt="10px">
                    <Icon as={BiLocationPlus} color="#FFC633" fontSize="24px"/>
                    <Text as="small" color="#fff" fontWeight="600" ml="10px">{produto.local}</Text>
                </Flex>
                <Flex alignItems="center" mt="10px">
                    <Icon as={BiCoinStack} color="#FFC633" fontSize="24px"/>
                    <Text as="small" color="#fff" fontWeight="600" ml="10px">{`R$${produto.preco},00/dia`}</Text>
                </Flex>
            </Flex>
            <Flex w="80%" justifyContent="flex-end" mt="10px">
                <Button onClick={handleSubmit} border="none" w="110px" borderRadius="10px" backgroundColor="#FFC633" h="30px" rightIcon={<Icon as={BiChevronDown} color="#000" fontSize="20px"/>} mr="10px">Confirmar</Button>
            </Flex>
        </Flex>
    )
}