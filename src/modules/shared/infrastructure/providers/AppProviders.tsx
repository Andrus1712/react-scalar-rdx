import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { LoadingSpinner } from "../components/LoadingSpinner";
import type { Store } from "@reduxjs/toolkit";
import type { Persistor } from "redux-persist";
import { GlobalStyle } from "../../styles/GlobalStyle";
import DynamicRoutes from "../../../../app/routes/dynamicRoutes";
interface AppProvidersProps {
    store: Store;
    persistor: Persistor;
    theme: DefaultTheme;
}

export const AppProviders = ({
    store,
    persistor,
    theme,
}: AppProvidersProps) => (
    <ErrorBoundary>
        <Provider store={store}>
            <PersistGate loading={<LoadingSpinner />} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <DynamicRoutes />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </ErrorBoundary>
);
