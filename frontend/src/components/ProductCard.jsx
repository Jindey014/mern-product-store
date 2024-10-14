import React, { useState } from 'react'
import {
  Box,
  Image,
  Heading,
  Text,
  HStack,
  Button,
  useColorModeValue,
  useToast,
  useDisclosure,
  VStack,
  Input,
} from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { useProductStore } from '../store/product'

const ProductCard = ({ product }) => {
  const { deleteProduct, updateProduct } = useProductStore()
  const [updatedProduct, setUpdatedProduct] = useState(product)
  const bg = useColorModeValue('white', 'gray.700')
  const toast = useToast()

  const handleDeleteProduct = async (id) => {
    const { success, message } = await deleteProduct(id)
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
  }
  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct)
    onClose()
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
  }

  //FOR THE POPUP EDIT MODAL
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box
        bg={bg}
        rounded={'lg'}
        shadow={'lg'}
        overflow={'hidden'}
        _hover={{ shadow: 'xl', transform: 'translateY(-5px)' }}
      >
        <Image
          src={product.image}
          alt={product.name}
          h={48}
          w={'full'}
          objectFit={'cover'}
        />
        <Box p={4}>
          <Heading as={'h3'} size={'md'} mb={2}>
            {product.name}
          </Heading>
          <Text fontWeight={'bold'} fontSize={'xl'}>
            Rs {product.price}
          </Text>
          <HStack spacing={2}>
            <Button colorScheme="blue" onClick={onOpen}>
              <EditIcon />
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                handleDeleteProduct(product._id)
              }}
            >
              <DeleteIcon />
            </Button>
          </HStack>
        </Box>

        {/* TO EDIT */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={4}>
                <Input
                  placeholder="Enter Product Name"
                  name="name"
                  value={updatedProduct.name}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      name: e.target.value,
                    })
                  }
                />
                <Input
                  placeholder="Enter Product Price"
                  name="price"
                  value={updatedProduct.price}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      price: e.target.value,
                    })
                  }
                />
                <Input
                  placeholder="Image URL"
                  name="image"
                  value={updatedProduct.image}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      image: e.target.value,
                    })
                  }
                />
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => handleUpdateProduct(product._id, updatedProduct)}
              >
                Update
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  )
}

export default ProductCard
