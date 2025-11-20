import { InfoWrapper, InfoCard, InfoTitle, InfoLink } from "./Info.styled";
import { NavLink } from "react-router-dom";

const Info = () => {
  return (
    <InfoWrapper>
      <InfoTitle>Information & Help</InfoTitle>

      <InfoCard>
        <h2>📄 Terms of Service</h2>
        <p>
          Read our usage rules, privacy details, and service limitations.  
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
          manage your profile, and customize your experience.
        </p>
        <NavLink to="/login" style={{ color: "#90b8ff" }}>
          Go to Login Page →
        </NavLink>
      </InfoCard>

      <InfoCard id="cookies">
        <h2>🍪 Cookies & Privacy</h2>
        <p>
          BlueFlix uses cookies to provide a smooth and personalized experience.
          Cookies help us remember your preferences, improve performance, and understand  
          how the site is used.
        </p>

        <p><strong>We use three types of cookies:</strong></p>
        <ul style={{ paddingLeft: "20px", lineHeight: "1.6" }}>
          <li><strong>Essential cookies:</strong> Required for the website to function properly.</li>
          <li><strong>Preference cookies:</strong> Store your theme mode, language, layout settings and similar.</li>
          <li><strong>Analytics cookies:</strong> Help us understand usage patterns and improve the service.</li>
        </ul>

        <p>
          You can accept or decline non-essential cookies at any time. If declined, the app  
          will still work, but some features may not behave optimally.
        </p>

        <NavLink to="/#faq" style={{ color: "#90b8ff" }}>
          Visit FAQ →
        </NavLink>
      </InfoCard>

      <InfoCard>
        <h2>❓ FAQ</h2>
        <p>
          Have questions? Visit our quick answers section to learn more about  
          accounts, watchlists, data sources and more.
        </p>
        <NavLink to="/#faq" style={{ color: "#90b8ff" }}>
          Open FAQ →
        </NavLink>
      </InfoCard>
    </InfoWrapper>
  );
};

export default Info;
