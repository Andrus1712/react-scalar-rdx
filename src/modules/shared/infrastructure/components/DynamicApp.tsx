import { useEffect, useState } from "react";
import { AppProviders } from "../providers/AppProviders";
import { AppConfig } from "../config/AppConfig";
import { createDynamicRouter } from "../../../app/routes/createDynamicRouter";
import { useGetMenuByUserQuery } from "../../services/menuApi";
import { LoadingSpinner } from "./LoadingSpinner";

export const DynamicApp = () => {
    const { data: menuItems, isLoading } = useGetMenuByUserQuery();
    const [dynamicRouter, setDynamicRouter] = useState(AppConfig.getRouter());

    useEffect(() => {
        if (menuItems) {
            const newRouter = createDynamicRouter(menuItems);
            setDynamicRouter(newRouter);
        }
    }, [menuItems]);

    if (isLoading) return <LoadingSpinner />;

    return (
        <AppProviders
            store={AppConfig.getStore()}
            persistor={AppConfig.getPersistor()}
            theme={AppConfig.getTheme()}
            router={dynamicRouter}
        />
    );
};