import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  margin-top: auto;
  padding: 24px 16px 14px;
`;

export const FooterTop = styled.div`
  width: 90%;
  margin: 0 auto 10px;
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
  gap: 24px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    text-align: center;
    align-items: center;
    justify-items: center;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const LogoDot = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 8px;
  background: radial-gradient(
    circle at 30% 20%,
    #4f7fc2,
    #1f4374 60%,
    #020a16 100%
  );
  box-shadow: 0 0 16px rgba(79, 127, 194, 0.65);
  flex-shrink: 0;
  margin-top: 4px;
`;

export const Title = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #e5e7eb;
  margin-bottom: 4px;
`;

export const Tagline = styled.p`
  font-size: 0.85rem;
  color: #9ca3af;
  max-width: 260px;

  @media (max-width: 800px) {
    max-width: 320px;
  }
`;

export const Columns = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 32px;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const Column = styled.div`
  min-width: 120px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ColumnTitle = styled.h4`
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #d1d5db;
  margin-bottom: 4px;
`;

export const FooterLink = styled.span`
  font-size: 0.85rem;
  color: #cbd5f5;
  opacity: 0.8;
  cursor: pointer;
  text-decoration: none;
  transition: 0.18s ease;
  display: inline-block;

  &:hover {
    opacity: 1;
    color: #ffffff;
    transform: translateY(-1px);
  }

  &.active {
    color: #4f7fc2;
    opacity: 1;
  }
`;

export const FooterBottom = styled.div`
  width: 90%;
  margin: 6px auto 0;
  padding-top: 10px;
  border-top: 1px solid rgba(31, 67, 116, 0.6);
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Copy = styled.p`
  font-size: 0.75rem;
  color: #9ca3af;
`;

export const SmallText = styled.p`
  font-size: 0.7rem;
  color: #6b7280;
`;
