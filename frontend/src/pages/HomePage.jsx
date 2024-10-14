import React, { useEffect } from 'react'
import { Container, VStack, Text, Heading, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import ProductListings from '../components/ProductListings'
import ProductCard from '../components/ProductCard'

const HomePage = () => {
  const { getProduct, products } = useProductStore()

  useEffect(() => {
    getProduct()
  }, [getProduct])
  console.log('products', products)
  return (
    <>
      <Container maxW={'container.xl'} mt={10}>
        <VStack spacing={8}>
          <Heading textAlign={'center'}>Current Products</Heading>
          {/* //LISTING THE PRODUCTS--- */}
          <ProductListings />
          {/* IF NO PRODUCT EXISTS */}
          {products.length === 0 && (
            <Text color={'gray.500'}>
              Products not found...
              <Link to="/create">
                <Text
                  as={'span'}
                  color={'blue.300'}
                  _hover={{ color: 'blue.500' }}
                  fontWeight={'bold'}
                >
                  {' '}
                  Click here to add new Product
                </Text>
              </Link>
            </Text>
          )}
        </VStack>
      </Container>
    </>
  )
}

export default HomePage
