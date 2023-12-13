import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const servicesApi = createApi({
    reducerPath: 'servicesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
        getServices: builder.query({
            query: () => `api/services`,
        }),
        getServiceItem: builder.query({
            query: (id) => `api/services/${id}`,
        }),
    }),
})

export const { useLazyGetServicesQuery, useLazyGetServiceItemQuery } = servicesApi