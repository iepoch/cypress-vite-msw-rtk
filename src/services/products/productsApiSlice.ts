import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { CartItem } from "./cartSlice";



export interface Products extends CartItem {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

export const productsApiSlice = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),

    endpoints(builder){
        return {
             getProducts: builder.query<Products[], number | void>({
                query: () => `products`,
             }),
           };
       }
})



export const { useGetProductsQuery } = productsApiSlice;

