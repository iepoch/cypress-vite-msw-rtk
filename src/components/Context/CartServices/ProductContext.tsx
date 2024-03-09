import { createContext, useEffect, useState } from 'react';

type ProductRating = {
	rate: number;
	count: number;
};

type Product = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: ProductRating;
};

type ProductContextType = {
	products: Product[];
	isLoading: boolean;
};

export const ProductContext = createContext<ProductContextType>({
	products: [],
	isLoading: false,
});

interface Props {
	children: React.ReactNode;
}

export const ProductsProvider: React.FC<Props> = ({ children }) => {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const URL = 'https://fakestoreapi.com/products';
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(URL);
				const json = await response.json();
				setProducts(json as Product[]);
			} catch (error) {
				console.log('error', error);
			}
			setIsLoading(false);
		};

		fetchData();
	}, []);
	return (
		<ProductContext.Provider value={{ products, isLoading }}>
			{children}
		</ProductContext.Provider>
	);
};
