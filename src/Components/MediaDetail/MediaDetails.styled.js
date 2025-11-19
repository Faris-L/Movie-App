import styled from "styled-components";

export const DetailWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 16px 50px;
  color: #e5e7eb;
`;

export const DetailLayout = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 26px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Poster = styled.img`
  width: 100%;
  border-radius: 18px;
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.9);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #f9fafb;
`;

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center ;
  gap: 10px;
  font-size: 0.95rem;
  color: #9ca3af;

  span::after {
    content: "•";
    margin: 0 6px;
  }

  span:last-child::after {
    content: "";
    margin: 0;
  }
`;

export const Overview = styled.p`
  margin-top: 8px;
  font-size: 0.98rem;
  line-height: 1.6;
  color: #d1d5db;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span`
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.2);
  border: 1px solid rgba(59, 130, 246, 0.7);
  font-size: 0.8rem;
`;
export const WatchButton = styled.button`
  padding: 10px 18px;
  background: #2563eb;
  border: none;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #1d4ed8;
  }
`;

export const TrailerOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const TrailerBox = styled.div`
  width: 80%;
  max-width: 900px;
  height: 500px;
  background: black;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 95%;
    height: 300px;
  }
`;
