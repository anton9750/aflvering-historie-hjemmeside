import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 48px;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.textPrimary};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;

  &.active {
    color: ${({ theme }) => theme.accentGold};
    text-decoration: underline;
  }

  &:hover {
    text-decoration: underline;
  }
`;
