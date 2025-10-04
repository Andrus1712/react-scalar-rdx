import { createBrowserRouter } from "react-router";
import App from "../App";
import LoginPage from "../../modules/auth/pages/LoginPage";
import UserPage from "../../modules/users/pages/UserPage";
// import Team from "../../modules/auth/pages/RegisterPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
    },
    {
        path: "/login",
        Component: LoginPage,
    },
    {
        path: "/users",
        Component: UserPage,
    },
]);
