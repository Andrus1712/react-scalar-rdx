import { Outlet } from "react-router";
import { useState } from "react";
import {
    Container,
    Content,
    Footer,
    MainLayoutContainer,
    Overlay,
} from "./MainLayout.styles";
import TopHeader from "./components/TopHeader";
import Sidebar from "./components/sidebar/Sidebar";

const MainLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);

    return (
        <MainLayoutContainer $sidebarOpen={sidebarOpen}>
            <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
            <Container>
                <TopHeader onToggleSidebar={toggleSidebar} />
                <Content>
                    <Outlet />
                </Content>
                <Footer>
                    <p>© 2025 Mi Proyecto</p>
                </Footer>
            </Container>
            <Overlay $isVisible={sidebarOpen} onClick={closeSidebar} />
        </MainLayoutContainer>
    );
};

export default MainLayout;
