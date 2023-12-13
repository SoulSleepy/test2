import { configureStore } from '@reduxjs/toolkit'
import { servicesApi } from './rtk/services.rtk'

export const store = configureStore({
    reducer: {
        [servicesApi.reducerPath]: servicesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(servicesApi.middleware),
})