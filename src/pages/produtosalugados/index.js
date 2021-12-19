import React, {useState, useEffect} from 'react'

import { Text, Flex, Input, Icon, Button } from '@chakra-ui/react'
import { BiArrowBack } from 'react-icons/bi'
import api from '../../api'
import { Card } from './card'
import { Link } from 'react-router-dom'

export const ProdutosAlugados = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        api.get("/produtos/alugados", {
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
                {data.map(produto => produto.datasAlugadas.map((data, index) => <Card key={`${produto.id}_${index}`} locatario={produto.locatario} avaliacao={produto.avaliacao} datas={data} local={produto.local} preco={produto.preco}/>))}
            </Flex>
        </Flex>
    )
}