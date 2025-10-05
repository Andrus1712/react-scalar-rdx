import { useAppSelector } from "../../../../app/hooks/reduxHooks";
import MenuItem from "./MenuItem";
import {
    MenuTitle,
    SidebarContainer,
    SidebarHeader,
    SidebarItems,
} from "./Sidebar.styles";
import {
    FaUsers,
    FaSignOutAlt,
    FaChartBar,
    FaCog,
    FaTools,
} from "react-icons/fa";

const iconMap: Record<string, JSX.Element> = {
    FaUsers: <FaUsers />,
    FaSignOutAlt: <FaSignOutAlt />,
    FaChartBar: <FaChartBar />,
    FaCog: <FaCog />,
    FaTools: <FaTools />,
};

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    const { menu } = useAppSelector((state) => state.menuUser);

    return (
        <SidebarContainer $isOpen={isOpen}>
            <SidebarHeader>
                <h2>🚀</h2>
            </SidebarHeader>
            <SidebarItems>
                <MenuTitle>
                    <span>Menu</span>
                </MenuTitle>
                {menu
                    ? [...menu]
                          .sort((a, b) => a.order - b.order)
                          .filter((item) => item.showMenu)
                          .map((item) => (
                              <MenuItem
                                  key={item.id}
                                  to={item.to}
                                  label={item.label}
                                  icon={iconMap[item.icon]}
                                  onClick={onClose}
                              />
                          ))
                    : null}
            </SidebarItems>
        </SidebarContainer>
    );
};

export default Sidebar;
