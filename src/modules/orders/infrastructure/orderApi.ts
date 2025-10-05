import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Order } from "../domain/OrderModels";

export const ordersApi = createApi({
    reducerPath: "orderApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/" }),
    tagTypes: ['Order'],
    endpoints: (builder) => ({
        getAllOrders: builder.query<Order[], void>({
            query: () => "ordenes.json",
            providesTags: ['Order'],
        }),
        createOrder: builder.mutation<Order, Partial<Order>>({
            query: (newOrder) => ({
                url: 'ordenes.json',
                method: 'POST',
                body: newOrder,
            }),
            invalidatesTags: ['Order'],
        }),
    }),
});

export const { useGetAllOrdersQuery, useCreateOrderMutation } = ordersApi;