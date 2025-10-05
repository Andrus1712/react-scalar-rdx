import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { MenuItem } from "../domain/MenuItem";

export const menuApi = createApi({
    reducerPath: "menuApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/" }),
    endpoints: (builder) => ({
        getMenuByUser: builder.query<MenuItem[], void>({
            query: () => "menu.json",
        }),
    }),
});

export const { useGetMenuByUserQuery } = menuApi;