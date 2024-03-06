import React from 'react'
import { ProductsProvider } from '../CartServices/ProductContext'
import CartProducts from './CartProducts'

export const CartComponent: React.FC = () => {
  return (
    <ProductsProvider>
      <CartProducts />
    </ProductsProvider>
  )
}
