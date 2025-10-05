import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MenuUserItems } from "../domain/MenuUserItems";

const initialState: MenuUserItems = {
    code: "",
    _token: "",
    menu: [],
};

const menuUserSlice = createSlice({
    name: "menuUser",
    initialState,
    reducers: {
        setMenuUser: (state, action: PayloadAction<MenuUserItems>) => {
            state.code = action.payload.code;
            state._token = action.payload._token;
            state.menu = action.payload.menu;
        },
    },
});

export const { setMenuUser } = menuUserSlice.actions;
export default menuUserSlice.reducer;