import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IPages {
	id: string;
	menuTitle: string;
	pageURL: string;
}

export interface IPage {
	default: IPages[];
}

export const pagesApiSlice = createApi({
	reducerPath: 'pagesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: '/api/',
	}),
	refetchOnFocus: true,
	refetchOnReconnect: true,
	refetchOnMountOrArgChange: true,
	endpoints(builder) {
		return {
			getPages: builder.query<IPages[], []>({
				query: () => 'pages',
				transformResponse(data: IPage[]) {
					//@ts-expect-error "Default is on the data object"
					const newData = data.default.map((page: IPage[]) => page);
					return newData;
				},
			}),
		};
	},
});

export const { useGetPagesQuery } = pagesApiSlice;
