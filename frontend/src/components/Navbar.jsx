import React from 'react'
import { Container } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Flex, Spacer, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Button, useColorMode } from '@chakra-ui/react'
import { PlusSquareIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Container maxW={'100vw'} px={4}>
        <Flex
          h={16}
          flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text
            fontSize={{ base: '30', md: '48', lg: '48' }}
            as="b"
            bgGradient="linear(to-br, #d9cf79, #5612d6)"
            bgClip={'text'}
            textTransform={'uppercase'}
            textAlign={'center'}
            mb={{ base: '4' }}
          >
            <Link to="/">Product Store</Link>
          </Text>

          <HStack spacing={2} alignItems={'center'}>
            <Link to="/create">
              {' '}
              <Button>
                <PlusSquareIcon fontSize={20} color="gray.500" />
              </Button>
            </Link>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </HStack>
        </Flex>
      </Container>
    </>
  )
}

export default Navbar
