import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { LoadingSpinner } from "../components/LoadingSpinner";
import type { Store } from "@reduxjs/toolkit";
import type { Persistor } from "redux-persist";
import { RouterProvider } from "react-router";
import type { ComponentProps } from "react";
import { GlobalStyle } from "../../styles/GlobalStyle";

interface AppProvidersProps {
    store: Store;
    persistor: Persistor;
    theme: object;
    router: ComponentProps<typeof RouterProvider>["router"];
}

export const AppProviders = ({
    store,
    persistor,
    theme,
    router,
}: AppProvidersProps) => (
    <ErrorBoundary>
        <Provider store={store}>
            <PersistGate loading={<LoadingSpinner />} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <RouterProvider router={router} />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </ErrorBoundary>
);
