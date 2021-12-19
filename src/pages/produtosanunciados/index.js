import React, {useState, useEffect} from 'react'

import { Text, Flex, Input, Icon, Button } from '@chakra-ui/react'
import { BiChevronLeft, BiSearchAlt2, BiX, BiArrowBack } from 'react-icons/bi'

import { Card } from './card'
import { Link } from 'react-router-dom'
import api from '../../api'
export const ProdutosAnunciados = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        api.get("/produtos/anuncios", {
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
                    <Text color="#FFD400" fontWeight="600" fontSize="22px">Produtos anunciados</Text>
                </Flex>
            </Flex>
            <Flex flexDirection="column" padding="10">
                {data.map(produto => <Card key={produto.id} imagem={produto.imagem} locatario={produto.locatario} avaliacao={produto.avaliacao} local={produto.local} preco={produto.preco} nome={produto.nome}/>)}
            </Flex>
        </Flex>
    )
}