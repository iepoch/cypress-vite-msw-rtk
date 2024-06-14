import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Products {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
}
export interface Items {
    default: Products[];
}
export const productsApiSlice = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: '/api/',
	}),
	refetchOnFocus: true,
	refetchOnReconnect: true,
	refetchOnMountOrArgChange: true,
	endpoints(builder) {
		return {
			getProducts: builder.query<Products[], []>({
				query: () => 'products',
				transformResponse(data: Items[] | Items) {
					const newData = Array.isArray(data)
						? data.map(item => item.default)
						: [data.default];
				
					return newData.flat();
				},
			}),
		};
	},
});

export const { useGetProductsQuery } = productsApiSlice;
