import { InfoWrapper, InfoTitle, InfoSection, InfoLink } from "./Info.styled";
import { NavLink } from "react-router-dom";

const Info = () => {
  return (
    <InfoWrapper>
      <InfoTitle>Information & Help</InfoTitle>

      <InfoSection>
        <h2>Terms of Service</h2>
        <p>
          This is where your Terms of Service will go. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <InfoLink href="https://www.example.com/terms" target="_blank" rel="noopener noreferrer">
          Read full Terms of Service
        </InfoLink>
      </InfoSection>

      <InfoSection>
        <h2>Help / Guide</h2>
        <p>
          Need help navigating the website? This is where your guide will go. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <NavLink to="/login">Go to Login Page</NavLink>
      </InfoSection>
    </InfoWrapper>
  );
};

export default Info;
