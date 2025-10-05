import { AppConfig } from "./modules/shared/infrastructure/config/AppConfig";
import { AppProviders } from "./modules/shared/infrastructure/providers/AppProviders";

export const App = () => (
    <AppProviders
        store={AppConfig.getStore()}
        persistor={AppConfig.getPersistor()}
        theme={AppConfig.getTheme()}
    />
);
