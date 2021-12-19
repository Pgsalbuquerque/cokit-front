import React, {useState} from "react";
import {
  Text,
  Flex,
  Box,
  Input,
  Icon
} from "@chakra-ui/react";
import {BiImageAdd} from 'react-icons/bi'
import api from '../../api'
import {useHistory} from 'react-router-dom'

export const Etapas = (props) => {
    const [etapa1, setEtapa1] = useState({url_image: ""})
    const [etapa2, setEtapa2] = useState({titulo: "", descricao: "", localizacao: ""})
    const [etapa3, setEtapa3] = useState({valor: "", dataInicial: "", dataFinal: ""})
    const [enviado, setEnviado] = useState(false)
    const history = useHistory()

    if (props.etapa === 1) {
        return (
        <Box mt="20px">
            <Flex flexDirection="column" w="16rem" backgroundColor="#FCF7F7" alignItems="flex-start" borderRadius="10">
                <Text as="small" textDecoration="none" color="#505565" fontSize="14px" fontWeight="600" backgroundColor="#FCF7F7">Url da imagem</Text>
                <Input value={etapa1.url_image} onChange={e => setEtapa1({url_image: e.target.value})} border="none" borderBottom={`2px solid ${etapa1.nome === "" ? "#DDDDDD" :  "#ffd400"}`} outline="none" type="url" h="2rem" textIndent="10px" w="16rem" color="#525050" fontWeight="600" backgroundColor="#FCF7F7"/>
            </Flex>
        </Box>
        )
    }

    if (props.etapa === 2) {
        return (
        <Box mt="20px">
            <Flex flexDirection="column" w="16rem" backgroundColor="#FCF7F7" alignItems="flex-start" borderRadius="10">
                <Text as="small" textDecoration="none" color="#505565" fontSize="14px" fontWeight="600" backgroundColor="#FCF7F7">Título</Text>
                <Input value={etapa2.titulo} onChange={e => setEtapa2({titulo: e.target.value, descricao: etapa2.descricao, localizacao: etapa2.localizacao})} border="none" borderBottom={`2px solid ${etapa1.nome === "" ? "#DDDDDD" :  "#ffd400"}`} outline="none" type="name" h="2rem" textIndent="10px" w="16rem" color="#525050" fontWeight="600" backgroundColor="#FCF7F7"/>
            </Flex>
            <Flex mt="10px" flexDirection="column" w="16rem" backgroundColor="#FCF7F7" alignItems="flex-start" borderRadius="10">
                <Text as="small" textDecoration="none" color="#505565" fontSize="14px" fontWeight="600" backgroundColor="#FCF7F7">Descrição</Text>
                <Input value={etapa2.descricao}  onChange={e => setEtapa2({titulo: etapa2.titulo, descricao: e.target.value, localizacao: etapa2.localizacao})} border="none" borderBottom={`2px solid ${etapa2.cpf === "" ? "#DDDDDD" :  "#ffd400"}`} outline="none" type="name" h="2rem" textIndent="10px" w="16rem" color="#525050" fontWeight="600" backgroundColor="#FCF7F7"/>
            </Flex>
            <Flex mt="10px" flexDirection="column" w="16rem" backgroundColor="FCF7F7" alignItems="flex-start" borderRadius="10">
                <Text as="small" textDecoration="none" color="#505565" fontSize="14px" fontWeight="600" backgroundColor="#FCF7F7">Localização</Text>
                <Input value={etapa2.localizacao}  onChange={e => setEtapa2({titulo: etapa2.titulo, descricao: etapa2.descricao, localizacao: e.target.value})} border="none" borderBottom={`2px solid ${etapa2.identidade === "" ? "#DDDDDD" :  "#ffd400"}`} outline="none" type="name" h="2rem" textIndent="10px" w="16rem" color="#525050" fontWeight="600" backgroundColor="#FCF7F7"/>
            </Flex>
        </Box>

        )
    }

    if (props.etapa >= 3) {
        
        if (props.etapa === 4 && !enviado) {
            setEnviado(true)
            api.post("/produtos", {
                image: etapa1.image,
                nome: etapa2.titulo,
                descricao: etapa2.descricao,
                local: etapa2.localizacao,
                preco: etapa3.valor,
                imagem: etapa1.url_image,
                dataInicial: etapa3.dataInicial,
                dataFinal: etapa3.dataFinal

            }, {
                headers: {
                    Authorization: localStorage.getItem("cokitsession")
                }
            }).then(r => {
                return history.push('/menu')
            })
            
        }
        return (
        <Box mt="20px">
            <Flex flexDirection="column" w="16rem" backgroundColor="#FCF7F7" alignItems="flex-start" borderRadius="10">
                <Text as="small" textDecoration="none" color="#505565" fontSize="14px" fontWeight="600" backgroundColor="#FCF7F7">Valor da diária</Text>
                <Input value={etapa3.valor}  onChange={e => setEtapa3({valor: e.target.value, dataInicial: etapa3.dataInicial, dataFinal: etapa3.dataFinal})} border="none" borderBottom={`2px solid ${etapa3.usuario === "" ? "#DDDDDD" :  "#ffd400"}`} outline="none" type="name" h="2rem" textIndent="10px" w="16rem" color="#525050" fontWeight="600" backgroundColor="#FCF7F7"/>
            </Flex>
            <Flex mt="10px" flexDirection="column" w="16rem" backgroundColor="#FCF7F7" alignItems="flex-start" borderRadius="10">
                <Text as="small" textDecoration="none" color="#505565" fontSize="14px" fontWeight="600" backgroundColor="#FCF7F7">Data inicial</Text>
                <Input value={etapa3.dataInicial}  onChange={e => setEtapa3({valor: etapa3.valor, dataInicial: e.target.value, dataFinal: etapa3.dataFinal})} border="none" borderBottom={`2px solid ${etapa3.senha === "" ? "#DDDDDD" :  "#ffd400"}`} outline="none" type="date" h="2rem" textIndent="10px" w="16rem" color="#525050" fontWeight="600" backgroundColor="#FCF7F7"/>
            </Flex>
            <Flex mt="10px" flexDirection="column" w="16rem" backgroundColor="#FCF7F7" alignItems="flex-start" borderRadius="10">
                <Text as="small" textDecoration="none" color="#505565" fontSize="14px" fontWeight="600" backgroundColor="#FCF7F7">Data final</Text>
                <Input value={etapa3.dataFinal}  onChange={e => setEtapa3({valor: etapa3.valor, dataInicial: etapa3.dataInicial, dataFinal: e.target.value})} border="none" borderBottom={`2px solid ${etapa3.confirmarSenha === "" ? "#DDDDDD" :  "#ffd400"}`} outline="none" type="date" h="2rem" textIndent="10px" w="16rem" color="#525050" fontWeight="600" backgroundColor="#FCF7F7"/>
            </Flex>
        </Box>

        )
    }
};
