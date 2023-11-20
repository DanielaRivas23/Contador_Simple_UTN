import React, { useState } from 'react';
import { Box, Input, Heading, Button, Grid, GridItem } from '@chakra-ui/react';

const Contador =()=> {
    const [cantidad, setCantidad] = useState(0);

    const decrementar = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    }

    const incrementar = () => {
        setCantidad(cantidad + 1);
    }

    const reiniciar = () => {
        setCantidad(0);
    }

    return(
        <Box>
            <Heading
                bg='brand.secondary'
                color='white'
                padding='1.5rem'
                textAlign='center'
                fontWeight='normal'
                letterSpacing='0.2em'
                fontSize={{ base: '3xl', md: '4xl' }}
            >Contador</Heading>
            <Box
                bg='brand.primary'
                minH='76vh'
                display='flex'
                alignItems='center'
                justifyContent='center'
            >
                <Input 
                    disabled
                    value={cantidad} 
                    fontSize='5rem'
                    w='13rem'
                    h='13rem'
                    textAlign='center'
                    borderRadius='50%'
                    borderWidth='1rem'
                    borderColor='brand.secondary'
                    bg='white'
                />
            </Box>
            <Grid
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(2, 1fr)'
                bg='brand.secondary'
            >
                <GridItem textAlign='right' colSpan={1}>
                    <Button 
                        _hover={{ bg: 'white', color: 'brand.primary', borderColor: 'brand.primary', borderWidth:'0.2rem' }}
                        width={{base:'100%', md: '50%'}} 
                        fontSize='3rem'
                        p='2rem'
                        colorScheme='brand' 
                        bgColor='brand.secondary' 
                        onClick={decrementar}
                    >-</Button>
                </GridItem>

                <GridItem colSpan={1}>
                    <Button 
                        _hover={{ bg: 'white', color: 'brand.primary', borderColor: 'brand.primary', borderWidth:'0.2rem' }}
                        width={{base:'100%', md: '50%'}} 
                        fontSize='2rem'
                        p='2rem'
                        colorScheme='brand' 
                        bgColor='brand.secondary' 
                        onClick={incrementar}
                    >+</Button>
                </GridItem>
                
                <GridItem textAlign='center' colSpan={2}>
                    <Button 
                        _hover={{ bg: 'white', color: 'brand.primary', borderColor: 'brand.primary', borderWidth:'0.1rem' }}
                        width={{base:'100%', md: '50%'}} 
                        fontSize='1.3rem'
                        p='2rem'
                        fontWeight='normal' 
                        colorScheme='brand' 
                        bg='brand.primary' 
                        onClick={reiniciar}
                    >Reiniciar</Button>
                </GridItem>
            </Grid>
            
        </Box>
    );
}

export default Contador;