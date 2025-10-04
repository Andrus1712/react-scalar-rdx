import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// 🔹 API central
export const userApi = createApi({
    reducerPath: "userApi", // identificador único en el store
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints: (builder) => ({
        getUsers: builder.query<any[], void>({
            query: () => "/users", // GET /users
        }),
        getUserById: builder.query<any, number>({
            query: (id) => `/users/${id}`, // GET /users/:id
        }),
    }),
});

// Hooks auto-generados por RTK Query
export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;