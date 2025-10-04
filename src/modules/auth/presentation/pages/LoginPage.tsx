const LoginPage = () => {
    return (
        <div>
            <h3>Iniciar Sesión</h3>
            <form>
                <input type="email" placeholder="Correo" />
                <input type="password" placeholder="Contraseña" />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};

export default LoginPage;
