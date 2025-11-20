// src/Pages/Random/random.styled.js
import styled from "styled-components";

export const RandomWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  color: white;
`;

export const RandomCard = styled.div`
  display: flex;
  gap: 30px;
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(59, 130, 246, 0.3);
  padding: 26px;
  border-radius: 22px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(12px);

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Poster = styled.img`
  width: 300px;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);

  @media (max-width: 850px) {
    width: 65%;
  }
`;

export const Info = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 12px;
`;

export const Meta = styled.div`
  display: flex;
  gap: 14px;
  font-size: 1rem;
  color: #cbd5f5;
  margin-bottom: 12px;
`;

export const Overview = styled.p`
  line-height: 1.6;
  color: #e5e7eb;
  margin-bottom: 20px;
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 14px;
`;

export const DetailsBtn = styled.button`
  padding: 10px 24px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  color: #ffffff;
  background: #2563eb;
  transition: 0.2s ease;

  &:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
  }
`;

export const ReloadBtn = styled.button`
  padding: 10px 24px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  border: 1px solid #60a5fa;
  background: transparent;
  color: #60a5fa;
  transition: 0.2s ease;

  &:hover {
    background: rgba(96, 165, 250, 0.2);
    transform: translateY(-2px);
  }
`;
