import React, { useEffect, useState } from 'react'

import { Text, Flex, Box, Input, Button } from '@chakra-ui/react'
import { EmailIcon, LockIcon} from '@chakra-ui/icons'
import Fundo from '../../assets/fundo.png'
import { Link } from 'react-router-dom'
import { NotMobileError } from '../notmobileerror'
import {useHistory} from 'react-router-dom'
import { AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'

import api from '../../api'
export const Login = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 470)
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    useEffect(() => {
        const token = localStorage.getItem("cokitsession")
        if (token){
            history.push("/list")
        }
    })

    const history = useHistory()

    const isMobileFunction = () => {
        setIsMobile(window.innerWidth <= 470)
    }

    const handleSubmit = () => {
        api.post("/usuarios/login", 
        {email, senha}
    ).then(r => {
        localStorage.setItem("cokitsession", r.data.token)
        history.push("/list")
    }).catch(e => alert("Senha incorreta"))
    }

    useEffect(() => {
        window.addEventListener('resize', isMobileFunction)
        return () => window.removeEventListener('resize', isMobileFunction)
    }, [])

    if (!isMobile) {
        return <NotMobileError/>
    }

    

    return (
        <Flex backgroundImage={Fundo} h="100%" 
        backgroundRepeat="no-repeat" 
        backgroundSize="cover" 
        alignItems="center" 
        justifyContent="space-evenly" 
        flexDirection="column">
            <Flex flexDirection="column" marginBottom="-40" alignItems="center">
                <Box h="2" w="13rem" backgroundColor="#FFC633"></Box>
                <Text as="h1" maxH="100" fontSize="40px" color="#fff">Cokit</Text>
                <Box h="2" w="13rem" backgroundColor="#FFC633"></Box>
            </Flex>
            <Flex flexDirection="column" alignItems="center" h="15rem" justifyContent="space-evenly" marginTop="-40">
                <Flex w="16rem" backgroundColor="#fff" alignItems="center" borderRadius="10">
                    <EmailIcon ml="10"/>
                    <Input value={email} onChange={e => setEmail(e.target.value)} outline="none"  h="3rem" w="100%" ml="10" placeholder="Seu login aqui" color="#525050" fontWeight="600" border="none" borderRadius="10"/>
                </Flex>
                <Flex w="16rem" backgroundColor="#fff" alignItems="center" borderRadius="10">
                    <LockIcon ml="10"/>
                    <Input value={senha} onChange={e => setSenha(e.target.value)} outline="none" type="password" ml="10" h="3rem" textIndent="10" w="16rem" color="#525050" fontWeight="600" placeholder="Sua senha aqui" border="none"/>
                    <AiFillEye mr="5" color="#525050"/>
                    <AiFillEyeInvisible mr="5" color="#525050"/>
                </Flex>
                <Button onClick={handleSubmit} h="3rem" w="16rem" mt="20px" backgroundColor="#FFC633" border="none" fontSize="20" borderRadius="10">Entrar</Button>
                <Flex flexDirection="row" h="3rem" mt="4">
                    <Text as={Link} to="/signup" color="#fff" fontSize="14" textDecoration="none">Ainda não possui uma conta?</Text>
                    <Text as={Link} to="/signup" ml="2px" color="#FFC633" fontSize="14" fontWeight="bold" textDecoration="none">Cadastre-se</Text>
                </Flex>
            </Flex>
        </Flex>   
 )   
}