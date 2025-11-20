import { InfoWrapper, InfoCard, InfoTitle, InfoLink } from "./Info.styled";
import { NavLink } from "react-router-dom";

const Info = () => {
  return (
    <InfoWrapper>
      <InfoTitle>Information & Help</InfoTitle>

      <InfoCard>
        <h2>📄 Terms of Service</h2>
        <p>
          Read our usage rules, privacy details and service limitations.  
          Your safety and clarity are important to us.
        </p>
        <InfoLink
          href="https://www.example.com/terms"
          target="_blank"
          rel="noopener noreferrer"
        >
          View full Terms of Service →
        </InfoLink>
      </InfoCard>

      <InfoCard>
        <h2>🧭 User Guide</h2>
        <p>
          Learn how to navigate BlueFlix, explore content, use search filters,  
          manage your profile and customize your experience.
        </p>
        <NavLink to="/login" style={{ color: "#90b8ff" }}>
          Go to Login Page →
        </NavLink>
      </InfoCard>

      <InfoCard>
        <h2>❓ FAQ</h2>
        <p>
          Have questions? Visit our quick answers section to learn more about  
          accounts, watchlists, data sources and more.
        </p>
       <a href="/#faq" style={{ color: "#90b8ff" }}>
          Open FAQ →
        </a>
      </InfoCard>
    </InfoWrapper>
  );
};

export default Info;
