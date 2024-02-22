import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const DOGS_API_KEY = '';

export interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export const dogsApiSlice = createApi({
  reducerPath: 'dogsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', DOGS_API_KEY);
      return headers;
    },
  }),
  refetchOnFocus: true,
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit = 172) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery } = dogsApiSlice;
