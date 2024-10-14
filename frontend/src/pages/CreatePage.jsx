import {
  Box,
  Container,
  Heading,
  Input,
  useColorModeValue,
  VStack,
  Button,
  Text,
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from '../store/product'
import { set } from 'mongoose'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { Link, useNavigate } from 'react-router-dom'

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  })

  const { createProduct } = useProductStore()
  const toast = useToast()
  const navigate = useNavigate()

  const handleAddProduct = async (e) => {
    e.preventDefault()

    const { success, message } = await createProduct(newProduct)
    navigate('/')
    if (success) {
      toast({
        title: 'Success',
        description: message,
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    } else {
      toast({
        title: 'Error',
        description: message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
    setNewProduct({ name: '', price: '', image: '' })
  }

  return (
    <>
      <Container maxW={'container.sm'} mt={10}>
        <Link to="/">
          {' '}
          <Text as={'b'} color={'blue.300'} _hover={{ color: 'blue.500' }}>
            <ArrowBackIcon />
            Back to HomePage{' '}
          </Text>
        </Link>
        <VStack spacing={8}>
          <Heading textAlign={'center'}>Create new Product</Heading>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('gray.100', 'gray.700')}
            w={{ base: '100%', sm: '90%' }}
            padding={'6'}
            shadow={'lg'}
          >
            <VStack spacing={8}>
              <Input
                placeholder="Enter Product Name"
                name="name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
              <Input
                placeholder="Enter Product Price"
                name="price"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
              <Input
                placeholder="Image URL"
                name="image"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
              />
              <Button colorScheme={'blue'} onClick={handleAddProduct}>
                Add Product
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </>
  )
}

export default CreatePage
