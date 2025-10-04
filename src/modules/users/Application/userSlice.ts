import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
    id: number;
    name: string;
}

interface UserState {
    list: User[];
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    list: [],
    loading: false,
    error: null,
};

// 🔥 async thunk para traer usuarios desde una API
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data; // esto se guarda en "fulfilled"
});

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload; // 👈 datos de la API
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error fetching users";
            });
    },
});

export default userSlice.reducer;