import { createBrowserRouter, type RouteObject } from "react-router";
import { lazy } from "react";
import AuthLayout from "../../modules/layouts/AuthLayout";
import MainLayout from "../../modules/layouts/MainLayout";
import ProtectedRoute from "../../modules/auth/presentation/components/ProtectedRoute";
import { ROUTES } from "./routePaths";

// Lazy load components for better performance
const LoginPage = lazy(() => import("../../modules/auth/presentation/pages/LoginPage"));
const UserPage = lazy(() => import("../../modules/users/presentation/pages/UserPage"));

const routes: RouteObject[] = [
  {
    path: ROUTES.ROOT,
    element: <ProtectedRoute />,
    children: [
      {
        path: ROUTES.ROOT,
        element: <MainLayout />,
        children: [
          {
            path: ROUTES.USERS,
            element: <UserPage />,
          },
        ],
      },
    ],
  },
  {
    path: ROUTES.AUTH.BASE,
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);