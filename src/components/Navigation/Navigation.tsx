import { Nav, StyledNavLink } from './Navigation.styles';

export function Navigation() {
  return (
    <Nav>
      <StyledNavLink to="/by-date">By Date</StyledNavLink>
      <StyledNavLink to="/" end>
        Today
      </StyledNavLink>
      <StyledNavLink to="/since">Since</StyledNavLink>
    </Nav>
  );
}
