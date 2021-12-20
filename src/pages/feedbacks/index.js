import React, { useState} from 'react'

import { Text, Flex,  Icon, Button, Input, Checkbox, Box } from '@chakra-ui/react'
import {  BiArrowBack } from 'react-icons/bi'

import { Link, useParams } from 'react-router-dom'
import api from '../../api'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export const Feedback = () => {
    const [select, setSelect] = useState(null)
    const params = useParams()
    const history = useHistory()

    const handleFeedback = () => {
        if (select != null) {
            api.post("/produtos/avaliar/"+params.product_id, {
                avaliacao: select
            }, {
                headers: {
                    Authorization: localStorage.getItem("cokitsession")
                }
            }).then(() => history.push("/product/me/rented")).catch(() => history.push("/product/me/rented"))
        }
    }

    return (
        <Flex flexDirection="column" h="100%" backgroundColor="#322F38" overflowY="hidden" overflow="auto"> 
            <Flex alignItems="center" mt="20" maxH="30px" ml="20px">
                <Button as={Link} to="/product/me/rented">
                    <Icon as={BiArrowBack} fontSize="25px" color="#ffd400" />
                </Button>
            </Flex>
            <Flex w="100%" alignItems="center" justifyContent="center" flexDirection="column">
                <Box h="2" w="13rem" backgroundColor="#ffd400"></Box>
                <Text as="h1" maxH="100" fontSize="40px" color="#fff">
                    Feedback
                </Text>
                <Box h="2" w="13rem" backgroundColor="#ffd400"></Box>
            </Flex>
            <Flex mt="40px" w="100%" alignItems="center" justifyContent="center">
                <Text as="small" w="80%" textAlign="center" fontWeight="600" color="#fff">Avalie a cozinha! tente ser o mais imparcial possível. Seu feedback ajuda nossa plataforma a melhorar cada vez mais</Text>
            </Flex>

            <Flex w="100%" alignItems="center" justifyContent="center" flexDirection="column">
                <Flex mt="20">
                    <Checkbox border="1px solid #fff" borderRadius={4} isChecked={select === 0} onChange={(e) => setSelect(0)} color="green" backgroundColor="#fff" h="20px" w="20px" ></Checkbox>
                    <Checkbox border="1px solid #fff" borderRadius={4} isChecked={select === 1} onChange={(e) => setSelect(1)} color="green" backgroundColor="#fff" h="20px" w="20px" ml="10px" ></Checkbox>
                    <Checkbox border="1px solid #fff" borderRadius={4} isChecked={select === 2} onChange={(e) => setSelect(2)} color="green" backgroundColor="#fff" h="20px" w="20px" ml="10px" ></Checkbox>
                    <Checkbox border="1px solid #fff" borderRadius={4} isChecked={select === 3} onChange={(e) => setSelect(3)} color="green" backgroundColor="#fff" h="20px" w="20px" ml="10px" ></Checkbox>
                    <Checkbox border="1px solid #fff" borderRadius={4} isChecked={select === 4} onChange={(e) => setSelect(4)} color="green" backgroundColor="#fff" h="20px" w="20px" ml="10px" ></Checkbox>
                    <Checkbox border="1px solid #fff" borderRadius={4} isChecked={select === 5} onChange={(e) => setSelect(5)} color="green" backgroundColor="#fff" h="20px" w="20px" ml="10px"></Checkbox>
                </Flex>
                <Flex>
                    <Text color="#fff" textAlign="center" h="20px" fontWeight="600" w="22px" >0</Text>
                    <Text color="#fff" textAlign="center" h="20px" fontWeight="600" w="22px" ml="10px" >1</Text>
                    <Text color="#fff" textAlign="center" h="20px" fontWeight="600" w="22px" ml="10px" >2</Text>
                    <Text color="#fff" textAlign="center" h="20px" fontWeight="600" w="22px" ml="10px" >3</Text>
                    <Text color="#fff" textAlign="center" h="20px" fontWeight="600" w="22px" ml="10px" >4</Text>
                    <Text color="#fff" textAlign="center" h="20px" fontWeight="600" w="22px" ml="10px">5</Text>
                </Flex>
            </Flex>
            <Flex w="100%" alignItems="center" justifyContent="center">
                <Button w="60%" onClick={handleFeedback} backgroundColor="#ffd400" h="40px" border="none" borderRadius={10} color="#000" fontWeight="600">Enviar feedback</Button>
            </Flex>
            <Flex h="3rem" w="100%" mt="10px"  justifyContent="center">
                <Text as="small" color="#fff" fontSize="16" textDecoration="none">Algum problema ocorrido?</Text>
                <Text ml="4px" as={Link} to="/help" fontWeight="bold" color="#ffd400" fontSize="16" textDecoration="none">Suporte</Text>
            </Flex>
        </Flex>
    )
}