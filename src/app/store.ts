import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../modules/auth/application/authSlice";
import { persistReducer, persistStore, type PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../modules/users/application/userSlice";
import menuUserSlice from "../modules/shared/application/menuUserSlice";
import { userApi } from "../modules/shared/services/userApi";
import { menuApi } from "../modules/shared/services/menuApi";


const persistConfig: PersistConfig<any> = {
    key: "auth",
    storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        users: userReducer,
        menuUser: menuUserSlice,
        [userApi.reducerPath]: userApi.reducer,
        [menuApi.reducerPath]: menuApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
                ignoredPaths: ["_persist"],
            },
        }).concat([
            userApi.middleware,
            menuApi.middleware
        ]),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;