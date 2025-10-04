import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./shared/styles/theme.ts";
import { GlobalStyle } from "./shared/styles/GlobalStule.ts";
import { RouterProvider } from "react-router";
import { router } from "./app/routes/dynamicRutes.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store.ts";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={<div>Cargando...</div>} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <RouterProvider router={router}></RouterProvider>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </StrictMode>
);
