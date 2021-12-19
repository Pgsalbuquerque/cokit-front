import React, {useEffect, useState} from 'react'

import { Text, Flex,  Icon, Button } from '@chakra-ui/react'
import {  BiArrowBack } from 'react-icons/bi'

import { Card } from './card'
import { Link } from 'react-router-dom'
import api from '../../api'

export const ProdutosAlugados2 = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        api.get("/produtos/anuncios/alugueis", {
            headers: {
                Authorization: localStorage.getItem("cokitsession")
            }
        }).then(r => setData(r.data))
    }, [])

    return (
        <Flex flexDirection="column" h="100%" backgroundColor="#322F38" overflowY="hidden" overflow="auto"> 
            <Flex alignItems="center" mt="20" maxH="30px" ml="20px">
                <Button as={Link} to="/menu">
                    <Icon as={BiArrowBack} fontSize="25px" color="#ffd400" />
                </Button>
                <Flex w="80%" justifyContent="center" alignItems="center" ml="10" >
                    <Text color="#FFD400" fontWeight="600" fontSize="22px">Produtos alugados</Text>
                </Flex>
            </Flex>
            <Flex flexDirection="column" padding="10">
                {data.map(produto => produto.alugueisUsuarios.map((data, index) => <Card key={`${produto.id}_${index}`} imagem={produto.imagem} nome={produto.nome} locatario={data.locador} avaliacao={produto.avaliacao} datas={data.datas[0]} local={produto.local} preco={produto.preco}/>))}
            </Flex>
        </Flex>
    )
}