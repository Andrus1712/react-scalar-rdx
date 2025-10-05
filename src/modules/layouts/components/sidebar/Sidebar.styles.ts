import styled from "styled-components";

export const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  background: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100%;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 280px;
    transform: translateX(${props => props.$isOpen ? '0' : '-100%'});
  }
`;

export const SidebarHeader = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.white};
  height: 3.33333rem;
  display: flex;
  align-items: center;
  width: 100%;
  background: ${props => props.theme.colors.primaryDark};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.md};
`;

export const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  flex: 1;
  width: 100%;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.md};
`;

export const MenuTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    letter-spacing: .05em;
    cursor: default;
    color: ${props => props.theme.colors.textMuted};
    padding-bottom: ${props => props.theme.spacing.sm};
    font-size: 12px;
    text-transform: uppercase;
`;