import { RouterProvider, createBrowserRouter } from "react-router";
import { useEffect, useState } from "react";
import { createDynamicRouter } from "./createDynamicRouter";
import { useGetMenuByUserQuery } from "../../modules/shared/services/menuApi";
import { LoadingSpinner } from "../../modules/shared/infrastructure/components/LoadingSpinner";
import { useAppDispatch } from "../hooks/reduxHooks";
import { setMenuUser } from "../../modules/shared/application/menuUserSlice";

const DynamicRoutes = () => {
    const { data: menuItems, isLoading } = useGetMenuByUserQuery();
    const [dynamicRouter, setDynamicRouter] = useState<ReturnType<
        typeof createBrowserRouter
    > | null>(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (menuItems) {
            const newRouter = createDynamicRouter(menuItems);

            setDynamicRouter(newRouter);

            dispatch(
                setMenuUser({
                    code: "user123",
                    _token: "token123",
                    menu: menuItems,
                })
            );
        }
    }, [menuItems, dispatch]);

    if (isLoading) return <LoadingSpinner />;

    if (!dynamicRouter) return <LoadingSpinner />;

    return <RouterProvider router={dynamicRouter} />;
};
export default DynamicRoutes;
