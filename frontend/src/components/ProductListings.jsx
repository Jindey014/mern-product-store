import React, { useEffect } from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { useProductStore } from '../store/product'
import ProductCard from './ProductCard'

const ProductListings = () => {
  const { getProduct, products } = useProductStore()

  useEffect(() => {
    getProduct()
  }, [getProduct])
  console.log('products', products)
  return (
    <>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        spacing={10}
        w={'full'}
      >
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default ProductListings
