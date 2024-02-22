import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IUsers {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface IUser {
  default: IUsers;
}

export const usersApiSlice = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
  }),

  endpoints(builder) {
    return {
      getUsers: builder.query<IUsers[], number | void>({
        query: () => `users`,
        transformResponse(data: IUser[]) {
          //@ts-expect-error "Default is on the data object"
          const newData = data.default.map((user: IUser[]) => user);
          return newData;
        },
      }),
    };
  },
});

export const { useGetUsersQuery } = usersApiSlice;
