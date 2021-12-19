import React, {useState} from "react";
import InputMask from "react-input-mask";
import {
  Text,
  Flex,
  Box,
  Input,
} from "@chakra-ui/react";
import {useHistory} from 'react-router-dom'
import api from '../../api'

export const Etapas = (props) => {
    const [etapa1, setEtapa1] = useState({nome: "", cpf: "", identidade: ""})
    const [etapa2, setEtapa2] = useState({email: "", celular: ""})
    const [etapa3, setEtapa3] = useState({usuario: "", senha: "", confirmarSenha: ""})
    const history = useHistory()
    if (props.etapa === 1) {
        return (
        <Box mt="20px">
            <Flex flexDirection="column" w="16rem" backgroundColor="#FCF7F7" alignItems="flex-start" borderRadius="10">
                <Text as="small" textDecoration="none" color="#505565" fontSize="14px" fontWeight="600" backgroundColor="#FCF7F7">Nome</Text>
                <Input value={etapa1.nome} onChange={e => setEtapa1({nome: e.target.value, cpf: etapa1.cpf, identidade: etapa1.identidade})} border="none" borderBottom={`2px solid ${etapa1.nome === "" ? "#DDDDDD" :  "#ffd400"}`} outline="none" type="name" h="2rem" textIndent="10px" w="16rem" color="#525050" fontWeight="600" backgroundColor="#FCF7F7"/>
            </Flex>
            <Flex mt="10px" flexDirection="column" w="16rem" backgroundColor="#FCF7F7" alignItems="flex-start" borderRadius="10">
                <Text as="small" textDecoration="none" color="#505565" fontSize="14px" fontWeight="600" backgroundColor="#FCF7F7">CPF</Text>
                <Input  mask="999.999.999-99" value={etapa1.cpf}  onChange={e => setEtapa1({nome: etapa1.nome, cpf: e.target.value, identidade: etapa1.identidade})} border="none" borderBottom={`2px solid ${etapa1.cpf === "" ? "#DDDDDD" :  "#ffd400"}`} outline="none" type="name" h="2rem" textIndent="10px" w="16rem" color="#525050" fontWeight="600" backgroundColor="#FCF7F7"/>
            </Flex>
            <Flex mt="10px" flexDirection="column" w="16rem" backgroundColor="FCF7F7" alignItems="flex-start" borderRadius="10">
                <Text as="small" textDecoration="none" color="#505565" fontSize="14px" fontWeight="600" backgroundColor="#FCF7F7">Identidade</Text>
                <Input value={etapa1.identidade}  onChange={e => setEtapa1({nome: etapa1.nome, cpf: etapa1.cpf, identidade: e.target.value})} border="none" borderBottom={`2px solid ${etapa1.identidade === "" ? "#DDDDDD" :  "#ffd400"}`} outline="none" type="name" h="2rem" textIndent="10px" w="16rem" color="#525050" fontWeight="600" backgroundColor="#FCF7F7"/>
            </Flex>
        </Box>

        )
    }

    if (props.etapa === 2) {
        return (
        <Box mt="20px">
            <Flex flexDirection="column" w="16rem" backgroundColor="#FCF7F7" alignItems="flex-start" borderRadius="10">
                <Text as="small" textDecoration="none" color="#505565" fontSize="14px" fontWeight="600" backgroundColor="#FCF7F7">E-mail</Text>
                <Input value={etapa2.email}  onChange={e => setEtapa2({email: e.target.value, celular: etapa2.celular})} border="none" borderBottom={`2px solid ${etapa2.email === "" ? "#DDDDDD" :  "#ffd400"}`} outline="none" type="email" h="2rem" textIndent="10px" w="16rem" color="#525050" fontWeight="600" backgroundColor="#FCF7F7"/>
            </Flex>
            <Flex mt="10px" flexDirection="column" w="16rem" backgroundColor="#FCF7F7" alignItems="flex-start" borderRadius="10">
                <Text as="small" textDecoration="none" color="#505565" fontSize="14px" fontWeight="600" backgroundColor="#FCF7F7">Celular</Text>
                <Input value={etapa2.celular}  onChange={e => setEtapa2({email: etapa2.email, celular: e.target.value.toString()})} border="none" borderBottom={`2px solid ${etapa2.celular === "" ? "#DDDDDD" :  "#ffd400"}`} outline="none" type="number" h="2rem" textIndent="10px" w="16rem" color="#525050" fontWeight="600" backgroundColor="#FCF7F7"/>
            </Flex>
        </Box>

        )
    }

    if (props.etapa >= 3) {
        if (props.etapa === 4) {
            api.post("/usuarios", {
                cpf: etapa1.cpf,
                nome: etapa1.nome,
                senha: etapa3.senha,
                email: etapa2.email,
                celular: etapa2.celular,
                usuario: etapa3.usuario,
                identidade: etapa1.identidade,

        }).then(r => {
            localStorage.setItem("cokitsession", r.data.token)
            history.push('/')
        })
        }
        return (
        <Box mt="20px">
            <Flex flexDirection="column" w="16rem" backgroundColor="#FCF7F7" alignItems="flex-start" borderRadius="10">
                <Text as="small" textDecoration="none" color="#505565" fontSize="14px" fontWeight="600" backgroundColor="#FCF7F7">Usuário</Text>
                <Input value={etapa3.usuario}  onChange={e => setEtapa3({usuario: e.target.value, senha: etapa3.senha, confirmarSenha: etapa3.confirmarSenha})} border="none" borderBottom={`2px solid ${etapa3.usuario === "" ? "#DDDDDD" :  "#ffd400"}`} outline="none" type="name" h="2rem" textIndent="10px" w="16rem" color="#525050" fontWeight="600" backgroundColor="#FCF7F7"/>
            </Flex>
            <Flex mt="10px" flexDirection="column" w="16rem" backgroundColor="#FCF7F7" alignItems="flex-start" borderRadius="10">
                <Text as="small" textDecoration="none" color="#505565" fontSize="14px" fontWeight="600" backgroundColor="#FCF7F7">Senha</Text>
                <Input value={etapa3.senha}  onChange={e => setEtapa3({usuario: etapa3.usuario, senha: e.target.value, confirmarSenha: etapa3.confirmarSenha})} border="none" borderBottom={`2px solid ${etapa3.senha === "" ? "#DDDDDD" :  "#ffd400"}`} outline="none" type="password" h="2rem" textIndent="10px" w="16rem" color="#525050" fontWeight="600" backgroundColor="#FCF7F7"/>
            </Flex>
            <Flex mt="10px" flexDirection="column" w="16rem" backgroundColor="#FCF7F7" alignItems="flex-start" borderRadius="10">
                <Text as="small" textDecoration="none" color="#505565" fontSize="14px" fontWeight="600" backgroundColor="#FCF7F7">Confirmar senha</Text>
                <Input value={etapa3.confirmarSenha}  onChange={e => setEtapa3({usuario: etapa3.usuario, senha: etapa3.senha, confirmarSenha: e.target.value})} border="none" borderBottom={`2px solid ${etapa3.confirmarSenha === "" ? "#DDDDDD" :  "#ffd400"}`} outline="none" type="password" h="2rem" textIndent="10px" w="16rem" color="#525050" fontWeight="600" backgroundColor="#FCF7F7"/>
            </Flex>
        </Box>

        )
    }
};