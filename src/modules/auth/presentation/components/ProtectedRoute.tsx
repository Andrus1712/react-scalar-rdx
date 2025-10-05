import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../../../../app/hooks/reduxHooks";
import type { RootState } from "../../../../app/store";

const ProtectedRoute = () => {
    const user = useAppSelector((state: RootState) => state.auth.isAuthenticated);

    // si no hay usuario => redirige a login
    if (!user) {
        return <Navigate to="/auth/login" replace />;
    }

    // si está logeado, renderiza el outlet (la ruta hija)
    return <Outlet />;
};

export default ProtectedRoute;
