import { AppProviders } from "./shared/infrastructure/providers/AppProviders";
import { AppConfig } from "./shared/infrastructure/config/AppConfig";
import { GlobalStyle } from "./shared/styles/GlobalStyle";

export const App = () => (
    <>
        <GlobalStyle />
        <AppProviders
            store={AppConfig.getStore()}
            persistor={AppConfig.getPersistor()}
            theme={AppConfig.getTheme()}
            router={AppConfig.getRouter()}
        />
    </>
);
