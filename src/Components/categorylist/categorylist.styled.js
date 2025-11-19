import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  margin-bottom: 45px;
  padding: 20px 0;
`;

export const SectionTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: #f9fafb;
  margin-bottom: 14px;
  padding-left: 6px;
  letter-spacing: 0.02em;
`;

export const HorizontalScroll = styled.div`
  display: flex;
  gap: 18px;
  overflow-x: auto;
  padding-bottom: 12px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(30, 41, 59, 0.6);
    border-radius: 999px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(59, 130, 246, 0.6);
    border-radius: 999px;
  }
`;

export const MediaCard = styled.div`
  min-width: 160px;
  max-width: 160px;
  background: radial-gradient(
      circle at 20% 0%,
      rgba(56, 189, 248, 0.15),
      transparent 55%
    ),
    rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(30, 58, 138, 0.7);
  border-radius: 16px;
  padding: 10px;
  cursor: pointer;
  transition: 0.25s ease;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.45);

  &:hover {
    transform: translateY(-6px) scale(1.03);
    border-color: #60a5fa;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.55);
  }
`;

export const MediaPoster = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 8px;
`;

export const MediaName = styled.p`
  font-size: 0.95rem;
  font-weight: 500;
  color: #e5e7eb;
  text-align: center;
  line-height: 1.3;
  height: 40px;
  overflow: hidden;
`;
