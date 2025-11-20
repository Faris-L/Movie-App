import { useState,useEffect } from "react";
import { BannerWrapper, BannerText, BannerButtons, BannerBtn } from "./cookies.styled";

const STORAGE_KEY = "cookie-consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <BannerWrapper>
      <BannerText>
        <strong>We use cookies to improve your BlueFlix experience.</strong>
        <p>
          They help us remember your preferences and understand how the app is used.
          You can accept or decline non-essential cookies.
        </p>
       <span className="linkish" onClick={() => window.location.href = "/info#cookies"}>
        Learn more about cookies
        </span>
      </BannerText>

      <BannerButtons>
        <BannerBtn $secondary onClick={handleDecline}>
          Decline
        </BannerBtn>
        <BannerBtn onClick={handleAccept}>
          Accept
        </BannerBtn>
      </BannerButtons>
    </BannerWrapper>
  );
};
export default CookieBanner;
