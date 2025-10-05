import styled from 'styled-components';
import { Link } from 'react-router';

export const SidebarItem = styled(Link)`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: ${props => props.theme.spacing.md};
  text-decoration: none;
  color: ${props => props.theme.colors.white};
  width: 100%;
  gap: 10px;
  border-radius: 10px;
  
  &:hover {
    background-color: ${props => props.theme.colors.primaryLight};
  }
`;