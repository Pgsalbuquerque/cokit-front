import React from 'react'

import { Text, Flex} from '@chakra-ui/react'

export const NotMobileError = () => {
    return (
        <Flex h="100%"
        w="100%"
        alignItems="center" 
        justifyContent="center" 
        flexDirection="column"
        backgroundColor="#322F38"
        >
            <Text color="#fff" fontWeight="600" fontSize="30px" textAlign="center">Ops! a cokit ainda esta em fase de desenvolvimento para computadores :(</Text>
            <Text color="#fff" fontWeight="600" fontSize="30px" textAlign="center">Por enquanto damos suporte apenas para dispositivos mobile!</Text>
            <Text color="#fff" fontWeight="600" fontSize="30px" textAlign="center">Assim que nossa plataforma suportar computadores a gente te avisa!</Text>
        </Flex>   
 )   
}