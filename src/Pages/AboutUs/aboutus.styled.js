import styled from "styled-components";

export const Page = styled.div`
  min-height: 85vh;
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 45px;
  width: 100%;
  max-width: 1200px;
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 40px 20px;
  text-align: center;
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: 0.25s ease;

  hr {
    width: 75%;
    margin: 22px auto;
    border: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 35px rgba(30, 64, 175, 0.45);
    border-color: rgba(59, 130, 246, 0.6);
  }
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 18px;
  border: 3px solid rgba(59, 130, 246, 0.5);
  box-shadow: 0 0 12px rgba(59, 130, 246, 0.4);
`;

export const Name = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: #f1f5f9;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

export const Location = styled.p`
  font-size: 0.95rem;
  color: #cbd5e1;
  font-weight: 500;
  margin-bottom: 18px;
`;

export const Description = styled.p`
  font-size: 0.95rem;
  color: #e2e8f0;
  line-height: 1.55;
  width: 80%;
  margin: 0 auto 20px;
`;

export const GitHubIcon = styled.i`
  font-size: 48px;
  color: #60a5fa;
  transition: 0.2s ease;

  &:hover {
    color: #93c5fd;
    transform: scale(1.15);
    text-shadow: 0 0 10px #60a5fa;
  }
`;
