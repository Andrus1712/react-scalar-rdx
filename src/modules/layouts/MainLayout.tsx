import { Link, Outlet } from "react-router";

const MainLayout = () => {
    return (
        <div className="main-layout">
            <header className="navbar">
                <h1>🚀 Mi Proyecto</h1>
                <nav>
                    <Link to="/users">Usuarios</Link>
                    <Link to="/auth/login">Salir</Link>
                </nav>
            </header>

            <main className="content">
                <Outlet /> {/* Aquí se renderizan las páginas hijas */}
            </main>

            <footer className="footer">
                <p>© 2025 Mi Proyecto</p>
            </footer>
        </div>
    );
};

export default MainLayout;
