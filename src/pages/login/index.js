import React, { useEffect, useState } from 'react'

import { Text, Flex, Box, Input, Button, Icon } from '@chakra-ui/react'
import { EmailIcon, LockIcon} from '@chakra-ui/icons'
import Fundo from '../../assets/fundo.png'
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import { AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'

import api from '../../api'
export const Login = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [verSenha, setVerSenha] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("cokitsession")
        if (token && token !== undefined){
            history.push("/menu")
        }
    })

    const history = useHistory()

    const handleSubmit = () => {
        api.post("/usuarios/login", 
        {email, senha}
    ).then(r => {
        localStorage.setItem("cokitsession", r.data.token)
        history.push("/menu")
    }).catch(e => alert("Senha incorreta"))
    }
    

    return (
        <Flex backgroundImage={Fundo} h="100%" 
        backgroundRepeat="no-repeat" 
        backgroundSize="cover" 
        alignItems="center" 
        justifyContent="space-evenly" 
        flexDirection="column">
            <Flex flexDirection="column" marginBottom="-40" alignItems="center">
                <Box h="2" w="13rem" backgroundColor="#ffd400"></Box>
                <Text as="h1" maxH="100" fontSize="40px" color="#fff">Cokit</Text>
                <Box h="2" w="13rem" backgroundColor="#ffd400"></Box>
            </Flex>
            <Flex flexDirection="column" alignItems="center" h="15rem" justifyContent="space-evenly" marginTop="-40">
                <Flex w="16rem" backgroundColor="#fff" alignItems="center" borderRadius="10">
                    <EmailIcon ml="10"/>
                    <Input value={email} onChange={e => setEmail(e.target.value)} outline="none"  h="3rem" w="100%" ml="10" placeholder="Seu login aqui" color="#525050" fontWeight="600" border="none" borderRadius="10"/>
                </Flex>
                <Flex w="16rem" backgroundColor="#fff" alignItems="center" borderRadius="10">
                    <LockIcon ml="10"/>
                    <Input value={senha} onChange={e => setSenha(e.target.value)} outline="none" type={verSenha ? "text" : "password"} ml="10" h="3rem" textIndent="10" w="16rem" color="#525050" fontWeight="600" placeholder="Sua senha aqui" border="none"/>
                    <Icon as={verSenha ? AiFillEye : AiFillEyeInvisible} onClick={() => setVerSenha(!verSenha)} fontSize="20px" mr="10px" />
                </Flex>
                <Button onClick={handleSubmit} h="3rem" w="16rem" mt="20px" backgroundColor="#ffd400" border="none" fontSize="20" borderRadius="10">Entrar</Button>
                <Flex flexDirection="row" h="3rem" mt="4">
                    <Text as={Link} to="/signup" color="#fff" fontSize="14" textDecoration="none">Ainda não possui uma conta?</Text>
                    <Text as={Link} to="/signup" ml="2px" color="#ffd400" fontSize="14" fontWeight="bold" textDecoration="none">Cadastre-se</Text>
                </Flex>
            </Flex>
        </Flex>   
 )   
}