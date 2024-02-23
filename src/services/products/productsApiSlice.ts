import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Products {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export const productsApiSlice = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),

  endpoints(builder) {
    return {
      getProducts: builder.query<Products[], []>({
        query: () => 'products',
      }),
    }
  },
})

export const { useGetProductsQuery } = productsApiSlice
