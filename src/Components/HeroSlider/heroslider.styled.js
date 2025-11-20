import styled, { keyframes } from "styled-components";


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


export const SliderWrapper = styled.section`
  width: 100%;
  max-width: 1600px;
  height: 70vh;                         
  margin: 0 auto;
  margin-bottom: 40px;
  border-radius: 28px;
  overflow: hidden;
  position: relative;

  @media (max-width: 900px) {
    border-radius: 0;
    height: 65vh;
  }
`;


export const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  color: #e5e7eb;
`;

export const Background = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;

  filter: brightness(0.85) blur(1px);
  transform: scale(1.05);

  animation: ${fadeIn} 0.6s ease;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;

  background:
    radial-gradient(
      circle at 18% 22%,
      rgba(9, 14, 30, 0.92),
      transparent 65%
    ),
    linear-gradient(
      to right,
      rgba(10, 20, 40, 0.95) 0%,
      rgba(18, 30, 60, 0.55) 50%,
      rgba(10, 20, 40, 0.9) 100%
    );

  animation: ${fadeIn} 0.6s ease;
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 70px 60px;
  max-width: 550px;
  animation: ${fadeIn} 0.6s ease;

  @media (max-width: 900px) {
    padding: 40px 24px;
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 800;
  color: #f9fafb;
  margin-bottom: 14px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Meta = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #cbd5f5;
  margin-bottom: 14px;
`;

export const Overview = styled.p`
  font-size: 1rem;
  color: #e5e7eb;
  line-height: 1.6;
  max-width: 520px;
  margin-bottom: 24px;
  opacity: 0.95;
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const PrimaryBtn = styled.button`
  padding: 10px 26px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  color: #fff;

  background: linear-gradient(135deg, #3b82f6, #2563eb);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(37, 99, 235, 0.65);
  }
`;

export const SecondaryBtn = styled.button`
  padding: 10px 24px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.7);
  cursor: pointer;
  font-weight: 500;
  font-size: 0.92rem;
  background: rgba(15, 23, 42, 0.75);
  color: #e5e7eb;

  transition: 0.2s ease;

  &:hover {
    background: rgba(15, 23, 42, 0.95);
    border-color: #fff;
  }
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 22px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
`;

export const Dot = styled.button`
  width: 9px;
  height: 9px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  background: ${({ $active }) =>
    $active ? "#ffffff" : "rgba(226, 232, 240, 0.45)"};
  transform: ${({ $active }) => ($active ? "scale(1.2)" : "scale(1)")};
  transition: 0.2s ease;
`;

export const Arrows = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  z-index: 9;
  pointer-events: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ArrowBtn = styled.button`
  pointer-events: all;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;

  background: rgba(15, 23, 42, 0.75);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: 0.2s ease;

  i {
    font-size: 22px;
  }

  &:hover {
    background: rgba(15, 23, 42, 0.95);
    transform: translateY(-2px);
  }
`;
