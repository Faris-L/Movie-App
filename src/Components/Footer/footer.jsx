import { NavLink } from "react-router-dom";
import {
  FooterContainer,
  FooterTop,
  Brand,
  LogoDot,
  Title,
  Tagline,
  Columns,
  Column,
  ColumnTitle,
  FooterLink,
  FooterBottom,
  Copy,
  SmallText,
} from "./footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <Brand>
          <LogoDot />
          <div>
            <Title>BlueFlix</Title>
            <Tagline>Stream your favorite movies & TV shows.</Tagline>
          </div>
        </Brand>

        <Columns>
          <Column>
            <ColumnTitle>Browse</ColumnTitle>
            <FooterLink as={NavLink} to="/">Home</FooterLink>
            <FooterLink as={NavLink} to="/movies">Movies</FooterLink>
            <FooterLink as={NavLink} to="/tv">TV Shows</FooterLink>
          </Column>

          <Column>
            <ColumnTitle>My Stuff</ColumnTitle>
            <FooterLink as={NavLink} to="/favorites">Favorites</FooterLink>
            <FooterLink as={NavLink} to="/watchlist">Watchlist</FooterLink>
            <FooterLink as={NavLink} to="/profile">Profile</FooterLink>
          </Column>

          <Column>
            <ColumnTitle>Info</ColumnTitle>
            <FooterLink as={NavLink} to="/about">About us</FooterLink>
            <FooterLink as={NavLink}  to="/info">Help & Support</FooterLink>
            <FooterLink as={NavLink}  to="/info">Terms & Privacy</FooterLink>
          </Column>
        </Columns>
      </FooterTop>

      <FooterBottom>
        <Copy>© {new Date().getFullYear()} BlueFlix. All rights reserved.</Copy>
        <SmallText>Made for learning & fun, not for commercial use.</SmallText>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
