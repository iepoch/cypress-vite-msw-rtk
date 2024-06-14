import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IUsers {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface IUser {
    default: IUsers[];
}

export const usersApiSlice = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/',
    }),
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
    endpoints(builder) {
        return {
            getUsers: builder.query<IUsers[], []>({
                query: () => 'users',
                transformResponse(data: IUser[] | IUser) {
					const newData = Array.isArray(data)
						? data.map(user => user.default)
						: [data.default];
				
					return newData.flat();
				},
            }),
        };
    },
});

export const { useGetUsersQuery } = usersApiSlice;