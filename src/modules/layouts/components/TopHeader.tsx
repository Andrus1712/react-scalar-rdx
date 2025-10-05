import { Header, ItemUser, BurgerButton } from "./TopHeader.styles";
import { FaUser, FaBars } from "react-icons/fa";
import { useTheme } from "styled-components";

interface TopHeaderProps {
    onToggleSidebar: () => void;
}

const TopHeader = ({ onToggleSidebar }: TopHeaderProps) => {
    const theme = useTheme();

    return (
        <Header>
            <BurgerButton onClick={onToggleSidebar}>
                <FaBars />
            </BurgerButton>
            <ItemUser>
                <FaUser color={theme.colors.white} />
            </ItemUser>
        </Header>
    );
};

export default TopHeader;
