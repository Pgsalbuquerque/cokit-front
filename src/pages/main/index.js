import React, {useEffect, useState} from 'react'

import { Text, Flex, Input, Icon, Button, Modal, ModalContent, ModalCloseButton, ModalBody } from '@chakra-ui/react'
import { BiChevronLeft, BiSearchAlt2, BiX, BiArrowBack } from 'react-icons/bi'
import api from '../../api'
import { Card } from './card'
import { Link } from 'react-router-dom'

export const Main = () => {

    const [total, setTotal] = useState([])
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        api.get("/produtos")
        .then(r => {
            setTotal(r.data.content)
            setProdutos(r.data.content)
        })
    }, [])

    console.log(produtos)

    return (
        <Flex flexDirection="column" h="100%" backgroundColor="#322F38" overflowY="hidden" overflow="auto"> 
            <Flex alignItems="center" justifyContent="center" w="100%">
                <Text mt="20" fontSize="22" color="#ffd400" mr="10" fontWeight="600" as="small">Cozinhas</Text>
            </Flex>
            <Flex alignItems="center" mt="20" maxH="30px" ml="20px">
                <Button as={Link} to="/menu">
                    <Icon as={BiArrowBack} fontSize="25px" color="#ffd400" />
                </Button>
                <Flex w="80%" backgroundColor="#FCF7F7" alignItems="center" borderRadius="6" ml="10" >
                    <Icon as={BiSearchAlt2} ml="10" fontSize="16px"/>
                    <Input h="2rem" onChange={e => setProdutos(total.filter(produtos => produtos.nome.includes(e.target.value)))} w="100%" ml="10" placeholder="O que você está procurando?" outline="none" color="#525050" fontWeight="600" border="none" borderRadius="10" backgroundColor="#FCF7F7"/>
                </Flex>
            </Flex>
            <Flex flexDirection="column" padding="10">
                {produtos.map(produto => <Card key={produto.id} idp={produto.id} nome={produto.nome} preco={produto.preco} local={produto.local} nomeLoc={produto.locatario.nome} descricao={produto.descricao}   />)}
            </Flex>
        </Flex>
    )
}