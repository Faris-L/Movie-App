import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const RecSection = styled.section`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 40px;
  animation: ${fadeInUp} 0.35s ease-out;
`;

export const RecHeaderRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 14px;
`;

export const RecTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: #f9fafb;
`;

export const RecSubtitle = styled.p`
  font-size: 0.9rem;
  color: #9ca3af;
`;

export const RecGridWrapper = styled.div`
  position: relative;
`;

export const RecGridBlur = styled.div`
  filter: ${({ $locked }) => ($locked ? "blur(5px)" : "none")};
  pointer-events: ${({ $locked }) => ($locked ? "none" : "auto")};
  transition: filter 0.25s ease;
`;

export const RecGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 18px;
`;

export const RecCard = styled.div`
  background: radial-gradient(
      circle at 20% 0%,
      rgba(56, 189, 248, 0.15),
      transparent 55%
    ),
    rgba(15, 23, 42, 0.9);
  border-radius: 16px;
  border: 1px solid rgba(30, 64, 175, 0.7);
  padding: 9px 9px 12px;
  cursor: pointer;
  text-align: center;
  transition: 0.2s ease;
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.8);

  &:hover {
    transform: translateY(-4px) scale(1.02);
    border-color: #60a5fa;
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.98);
  }
`;

export const RecPoster = styled.img`
  width: 100%;
  height: 210px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 8px;
`;

export const RecName = styled.p`
  font-size: 0.9rem;
  color: #e5e7eb;
  line-height: 1.3;
  height: 38px;
  overflow: hidden;
`;

/* === LOCKED OVERLAY === */

export const LockedOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;

  background: radial-gradient(
      circle at center,
      rgba(15, 23, 42, 0.9),
      rgba(15, 23, 42, 0.98)
    );
  border-radius: 18px;
  border: 1px solid rgba(96, 165, 250, 0.6);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);

  text-align: center;
  padding: 18px;
`;

export const LockedText = styled.p`
  font-size: 0.95rem;
  color: #e5e7eb;
`;

export const LockedButton = styled.button`
  margin-top: 4px;
  padding: 8px 20px;
  border-radius: 999px;
  border: none;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #f9fafb;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;

  box-shadow: 0 10px 24px rgba(37, 99, 235, 0.6);
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(37, 99, 235, 0.8);
  }
`;
