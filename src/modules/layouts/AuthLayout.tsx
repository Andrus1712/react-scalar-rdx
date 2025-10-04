import { Outlet } from "react-router";

const AuthLayout = () => {
    return (
        <div className="auth-layout">
            <h2>Bienvenido 👋</h2>
            <div className="auth-container">
                <Outlet /> {/* Aquí van las páginas de login/register */}
            </div>
        </div>
    );
};

export default AuthLayout;
