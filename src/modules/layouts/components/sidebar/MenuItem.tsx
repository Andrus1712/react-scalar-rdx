import { type ReactNode } from "react";
import { SidebarItem } from "./MenuItem.styles";

interface MenuItemProps {
    to: string;
    label: string;
    icon?: ReactNode;
    onClick?: () => void;
}

const MenuItem = ({ to, label, icon, onClick }: MenuItemProps) => {
    return (
        <SidebarItem to={to} onClick={onClick}>
            <div>{icon && <span>{icon}</span>}</div>
            <div>{label}</div>
        </SidebarItem>
    );
};

export default MenuItem;
