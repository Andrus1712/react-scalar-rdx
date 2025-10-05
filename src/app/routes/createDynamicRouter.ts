import { createBrowserRouter, type RouteObject, Navigate } from "react-router";
import { lazy, createElement } from "react";
import { ROUTES } from "./routePaths";
import AuthLayout from "../../modules/layouts/AuthLayout";
import MainLayout from "../../modules/layouts/MainLayout";
import ProtectedRoute from "../../modules/auth/presentation/components/ProtectedRoute";
import type { MenuItem } from "../../modules/shared/domain/MenuItem";

const LoginPage = lazy(() => import("../../modules/auth/presentation/pages/LoginPage"));
const UserPage = lazy(() => import("../../modules/users/presentation/pages/UserPage"));
const DashboardPage = lazy(() => import("../../modules/dashboard/presentation/pages/DashboardPage"));
const SettingsPage = lazy(() => import("../../modules/settings/presentation/pages/SettingsPage"));


const componentMap: Record<string, React.ComponentType> = {
    "user-index": UserPage,
    "dashboard-index": DashboardPage,
    "settings-index": SettingsPage,
    "settings-show": SettingsPage,
};

export const createDynamicRouter = (menuItems: MenuItem[] = []) => {
    // Generate routes from menu items
    let indexItem;
    const dynamicRoutes = menuItems
        .filter(item => item.to !== "/auth/login" && componentMap[item.key])
        .map(item => {
            if (item.index) {
                indexItem = {
                    index: item.index,
                    element: createElement(componentMap[item.key]),
                };
            }
            return {
                path: item.to.replace('/', ''),
                element: createElement(componentMap[item.key]),
            };
        });

    if (indexItem) {
        dynamicRoutes.unshift(indexItem);
    }

    const routes: RouteObject[] = [
        {
            path: "/",
            element: createElement(ProtectedRoute),
            children: [
                {
                    path: ROUTES.ROOT,
                    element: createElement(MainLayout),
                    children: dynamicRoutes,
                },
            ],
        },
        {
            path: ROUTES.AUTH.BASE,
            element: createElement(AuthLayout),
            children: [
                {
                    path: "login",
                    element: createElement(LoginPage),
                },
            ],
        },
    ];

    return createBrowserRouter(routes);
};