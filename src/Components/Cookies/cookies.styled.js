// CookieBanner.styled.js
import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, 30px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;

export const BannerWrapper = styled.div`
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  z-index: 9999;

  width: min(900px, 100% - 32px);

  background: radial-gradient(
      circle at 0% 0%,
      rgba(56, 189, 248, 0.18),
      transparent 55%
    ),
    rgba(15, 23, 42, 0.96);
  border-radius: 18px;
  padding: 16px 20px;

  border: 1px solid rgba(96, 165, 250, 0.8);
  box-shadow:
    0 22px 60px rgba(15, 23, 42, 0.9),
    0 0 0 1px rgba(15, 23, 42, 0.9);

  display: grid;
  grid-template-columns: 1fr auto;
  gap: 14px;
  align-items: center;

  animation: ${slideUp} 0.28s ease-out;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    row-gap: 10px;
    padding: 14px 14px;
  }
`;

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  strong {
    font-size: 0.95rem;
    color: #e5e7eb;
  }

  p {
    font-size: 0.86rem;
    color: #cbd5f5;
    line-height: 1.5;
  }

  span.linkish {
    font-size: 0.8rem;
    color: #93c5fd;
    cursor: pointer;
    text-decoration: underline;
    width: fit-content;

    &:hover {
      color: #bfdbfe;
    }
  }
`;

export const BannerButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 700px) {
    justify-content: flex-start;
  }
`;

export const BannerBtn = styled.button`
  padding: 8px 18px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  border: ${({ $secondary }) =>
    $secondary ? "1px solid rgba(148, 163, 184, 0.9)" : "none"};

  background: ${({ $secondary }) =>
    $secondary
      ? "transparent"
      : "linear-gradient(135deg, #3b82f6, #2563eb)"};
  color: ${({ $secondary }) => ($secondary ? "#e5e7eb" : "#f9fafb")};

  box-shadow: ${({ $secondary }) =>
    $secondary
      ? "none"
      : "0 10px 26px rgba(37, 99, 235, 0.6)"};

  transition: 0.18s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ $secondary }) =>
      $secondary
        ? "0 0 0 1px rgba(148, 163, 184, 0.6)"
        : "0 14px 32px rgba(37, 99, 235, 0.75)"};
    border-color: ${({ $secondary }) =>
      $secondary ? "rgba(226, 232, 240, 0.9)" : "none"};
  }
`;
