

import { NavLink } from "react-router-dom";
import {
  HeaderContainer,
  Brand,
  LogoDot,
  Title,
  Nav,
  StyledNavLink,
  RightSide,
  LoginButton,
} from "./header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <Brand>
        <LogoDot />
        <Title>BlueFlix</Title>
      </Brand>

      <Nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
        <StyledNavLink to="/tv">TV Shows</StyledNavLink>
        <StyledNavLink to="/genres">Genres</StyledNavLink>
        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
        <StyledNavLink to="/watchlist">Watchlist</StyledNavLink>
        <StyledNavLink to="/profile">Profile</StyledNavLink>
        <StyledNavLink to="/about">About us</StyledNavLink>
      </Nav>

      <RightSide>
        <LoginButton as={NavLink} to="/login">
          Log in
        </LoginButton>
      </RightSide>
    </HeaderContainer>
  );
};

export default Header;
