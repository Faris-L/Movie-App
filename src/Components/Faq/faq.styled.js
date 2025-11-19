import styled from "styled-components";

export const FaqWrapper = styled.section`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 50px;
  padding: 20px 12px 28px;
  border-radius: 20px;
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(148, 163, 184, 0.4);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.9);

  @media (min-width: 768px) {
    padding: 24px 24px 32px;
  }
`;

export const FaqTitle = styled.h2`
  font-size: 1.7rem;
  font-weight: 700;
  color: #f9fafb;
  margin-bottom: 18px;
  letter-spacing: 0.03em;
`;

export const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FaqItem = styled.div`
  border-radius: 14px;
  padding: 12px 14px;
  background: ${({ $open }) =>
    $open
      ? "linear-gradient(135deg, rgba(37,99,235,0.25), rgba(30,64,175,0.35))"
      : "rgba(15, 23, 42, 0.9)"};
  border: 1px solid
    ${({ $open }) =>
      $open ? "rgba(96,165,250,0.9)" : "rgba(55,65,81,0.8)"};
  transition: 0.2s ease;
  cursor: pointer;
`;

export const QuestionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const QuestionText = styled.p`
  font-size: 0.98rem;
  font-weight: 600;
  color: #e5e7eb;
`;

export const ToggleIcon = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: #60a5fa;
`;

export const Answer = styled.p`
  margin-top: 8px;
  font-size: 0.92rem;
  color: #cbd5f5;
  line-height: 1.5;
`;
