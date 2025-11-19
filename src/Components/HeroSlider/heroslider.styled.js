import styled from "styled-components";

export const SliderWrapper = styled.section`
  width: 100%;
  max-width: 1600px;     
  margin: 0 auto;        

  min-height: 65vh;
  max-height: 75vh;
  position: relative;
  margin-bottom: 40px;
  border-radius: 24px;
  overflow: hidden;

  @media (max-width: 768px) {
    border-radius: 0;
  }
`;


export const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  color: #e5e7eb;
  font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;
`;

export const Background = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: blur(0px);
  transform: scale(1.05);
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
      circle at 20% 20%,
      rgba(15, 23, 42, 0.9),
      transparent 60%
    ),
    linear-gradient(to right, #132163ff 0%, rgba(44, 55, 80, 0.4) 55%, #132163ff 100%);
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 550px;
  padding: 70px 60px;

  @media (max-width: 900px) {
    max-width: 100%;
    padding: 40px 20px;
  }
`;

export const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  margin-bottom: 14px;
  color: #f9fafb;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Meta = styled.p`
  font-size: 0.95rem;
  font-weight: 500;
  color: #cbd5f5;
  margin-bottom: 18px;
`;

export const Overview = styled.p`
  font-size: 0.98rem;
  color: #e5e7eb;
  line-height: 1.6;
  max-width: 520px;
  margin-bottom: 24px;
  text-shadow: 0 1px 3px rgba(15, 23, 42, 0.8);
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;

export const PrimaryBtn = styled.button`
  padding: 10px 26px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #f9fafb;
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 26px rgba(37, 99, 235, 0.6);
  }
`;

export const SecondaryBtn = styled.button`
  padding: 10px 24px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.8);
  cursor: pointer;
  font-weight: 500;
  font-size: 0.92rem;
  background: rgba(15, 23, 42, 0.8);
  color: #e5e7eb;
  transition: 0.2s ease;

  &:hover {
    background: rgba(15, 23, 42, 0.95);
    border-color: #e5e7eb;
  }
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 22px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 3;
`;

export const Dot = styled.button`
  width: 9px;
  height: 9px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background: ${({ $active }) =>
    $active ? "#ffffff" : "rgba(226, 232, 240, 0.4)"};
  opacity: ${({ $active }) => ($active ? 1 : 0.7)};
  transform: ${({ $active }) => ($active ? "scale(1.1)" : "scale(1)")};
  transition: 0.18s ease;
`;

export const Arrows = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  z-index: 3;
  pointer-events: none; 
`;

export const ArrowBtn = styled.button`
  pointer-events: all;
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: none;
  background: rgba(15, 23, 42, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.18s ease;
  color: #e5e7eb;

  i {
    font-size: 22px;
  }

  &:hover {
    background: rgba(15, 23, 42, 0.98);
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
