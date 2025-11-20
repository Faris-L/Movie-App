import {
  HeaderContainer,
  Brand,
  LogoDot,
  Title,
  Nav,
  StyledNavLink,
  RightSide,
  LoginButton,
  ProfileButton,
} from "./header.styled";

const Header = ({ user }) => {
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
        <StyledNavLink to="/watchlist">Watchlist</StyledNavLink>
        <StyledNavLink to="/random">Random</StyledNavLink>
        <StyledNavLink to="/info">Info</StyledNavLink>
        <StyledNavLink to="/about">About us</StyledNavLink>
      </Nav>

      <RightSide>
        {!user ? (
          <LoginButton to="/login">Log in</LoginButton>
        ) : (
          <ProfileButton to="/profile">{user.username}</ProfileButton>
        )}
      </RightSide>
    </HeaderContainer>
  );
};

export default Header;
