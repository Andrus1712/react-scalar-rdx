import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./../modules/auth/store/authSlice";
import { persistReducer, persistStore, type PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../modules/users/store/userSlice";


const rootReducer = combineReducers({
    auth: authReducer,
    // otros reducers...
});

const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
    key: "root",
    storage,
    whitelist: ["auth"]
};

const persistedAuthReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        users: userReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
                ignoredPaths: ["_persist"],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;