import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 24px 48px;
  color: #e5e7eb;
  font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;

  @media (max-width: 768px) {
    padding: 24px 16px 40px;
  }
`;

export const Section = styled.section`
  margin-bottom: 40px;
  background: rgba(15, 23, 42, 0.6);
  border-radius: 20px;
  padding: 20px 22px 24px;
  border: 1px solid rgba(148, 163, 184, 0.35);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(18px);

  @media (max-width: 768px) {
    padding: 16px 14px 18px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 18px;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: #f9fafb;
`;



export const GenresGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px 18px;
  justify-content: center;       
  padding: 10px 0;

  @media (max-width: 768px) {
    gap: 10px 12px;
  }
`;


export const GenreItem = styled.button`
  padding: 10px 22px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.35);
  background: rgba(15, 23, 42, 0.6);
  color: #e5e7eb;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.22s ease;
  backdrop-filter: blur(6px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);


  &:hover {
    border-color: #60a5fa;
    box-shadow: 0 0 18px rgba(59, 130, 246, 0.5);
    background: rgba(30, 58, 138, 0.5);
    transform: translateY(-2px);
  }


  &.active {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: #f9fafb;
    border-color: transparent;
    box-shadow: 0 0 28px rgba(37, 99, 235, 0.7);
    transform: translateY(-2px) scale(1.02);
  }
`;



export const MoviesGrid = styled.div`
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 22px;

  @media (min-width: 1400px) {
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  }
`;

export const MovieCard = styled.div`
  background: radial-gradient(
      circle at 10% 0%,
      rgba(56, 189, 248, 0.12),
      transparent 50%
    ),
    rgba(15, 23, 42, 0.95);
  border-radius: 18px;
  padding: 10px 10px 14px;
  border: 1px solid rgba(30, 64, 175, 0.6);
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.8);
  text-align: center;
  transition: 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 22px 40px rgba(15, 23, 42, 0.95);
    border-color: #60a5fa;
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 230px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 10px;
  display: block;
`;

export const MovieName = styled.p`
  font-size: 0.92rem;
  color: #e5e7eb;
  line-height: 1.3;
`;
export const LoadMoreBtn = styled.button`
  margin: 26px auto 4px;
  padding: 10px 24px;
  border-radius: 999px;
  border: none;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #f9fafb;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.8);
  transition: 0.2s ease;
  display: block;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(15, 23, 42, 0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

