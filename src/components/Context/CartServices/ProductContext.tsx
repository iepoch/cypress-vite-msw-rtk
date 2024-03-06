// import { createContext, useContext, useState } from 'react'

// type Product = {
//   id: number
//   title: string
//   price: number
//   description: string
//   category: string
//   image: string
//   rating: {
//     rate: number
//     count: number
//   }
// }

// type ProductContextType = {
//   products: Product[]
//   isLoading: boolean
//   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
// }

// const ProductContext = createContext<ProductContextType>({
//   products: [],
//   isLoading: false,
//   setIsLoading: () => {},
// })

// export function useProductsContext() {
//   return useContext(ProductContext)
// }

// export function ProductsContextProvider({ children }: { children: React.ReactNode }) {
//   const [products, setProducts] = useState<Product[]>([])
//   const [isLoading, setIsLoading] = useState(true)

//   // Set isLoading to true before fetching data
//   // Set isLoading to false after fetching data
//   // Handle any errors that may occur during fetching
//   useEffect(() => {
//     async function fetchProducts() {
//         const response = await fetch('https://fakestoreapi.com/')
//         const data = await response.json()
//         setProducts(data)
//         setIsLoading(false)
//     }
//     fetchProducts().catch(console.error)
//   }, [products])

//   return (
//     <ProductContext.Provider value={{ products, isLoading, setIsLoading }}>
//       {children}
//     </ProductContext.Provider>
//   )
// }