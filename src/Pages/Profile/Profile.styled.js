import styled from "styled-components";

export const ProfileWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 40px auto;
  padding: 24px;
  color: #e5e7eb;
  font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;

  background: radial-gradient(
      circle at 0% 0%,
      rgba(56, 189, 248, 0.17),
      transparent 55%
    ),
    rgba(15, 23, 42, 0.88);
  border-radius: 24px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(14px);

  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 900px) {
    margin: 24px auto;
    padding: 18px;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;

export const Greeting = styled.h2`
  font-size: 2.1rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  margin-bottom: 4px;
  background: linear-gradient(135deg, #bfdbfe, #60a5fa);
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

export const OptionsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 8px 0 4px;
`;

export const OptionsButton = styled.button`
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.7);
  background: rgba(15, 23, 42, 0.9);
  color: #e5e7eb;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.18s ease;

  &:hover {
    border-color: #60a5fa;
    background: rgba(30, 64, 175, 0.9);
    box-shadow: 0 6px 18px rgba(37, 99, 235, 0.6);
    transform: translateY(-1px);
  }
`;

export const FieldLabel = styled.label`
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: 10px;
  margin-bottom: 4px;
`;

export const FieldInput = styled.input`
  padding: 9px 11px;
  font-size: 0.9rem;
  border-radius: 10px;
  border: 1px solid rgba(148, 163, 184, 0.7);
  background: rgba(15, 23, 42, 0.9);
  color: #e5e7eb;
  width: 260px;
  outline: none;
  transition: 0.18s ease;

  &:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 1px rgba(37, 99, 235, 0.7);
    background: rgba(15, 23, 42, 0.98);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const NewsSection = styled.div`
  min-width: 220px;
  max-width: 260px;
  margin-left: 24px;
  padding: 14px 16px;
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(55, 65, 81, 0.9);
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.9);
  align-self: flex-start;

  @media (max-width: 900px) {
    margin-left: 0;
    margin-top: 18px;
    width: 100%;
  }
`;

export const NewsTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #e5e7eb;
  margin-bottom: 8px;
  border-bottom: 1px solid rgba(75, 85, 99, 0.9);
  padding-bottom: 4px;
`;

/* ===== MODAL ===== */

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: radial-gradient(
      circle at center,
      rgba(15, 23, 42, 0.9),
      rgba(0, 0, 0, 0.95)
    );
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  width: 100%;
  max-width: 420px;
  background: radial-gradient(
      circle at 0% 0%,
      rgba(56, 189, 248, 0.18),
      transparent 60%
    ),
    rgba(15, 23, 42, 0.96);
  border-radius: 20px;
  padding: 22px 20px 18px;
  color: #e5e7eb;
  border: 1px solid rgba(96, 165, 250, 0.6);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.9);
`;

export const ModalTitle = styled.p`
  font-size: 0.98rem;
  margin-bottom: 14px;
  color: #f9fafb;
`;

export const ModalInput = styled.input`
  padding: 8px 10px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgba(148, 163, 184, 0.9);
  background: rgba(15, 23, 42, 0.96);
  color: #e5e7eb;
  margin-bottom: 9px;
  font-size: 0.9rem;
  outline: none;
  transition: 0.18s ease;

  &:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 1px rgba(37, 99, 235, 0.7);
  }
`;

export const ModalButton = styled.button`
  padding: 8px 16px;
  margin-right: 10px;
  margin-top: 6px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.8);
  background: rgba(15, 23, 42, 0.95);
  color: #e5e7eb;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.18s ease;

  &:hover {
    border-color: #60a5fa;
    background: rgba(30, 64, 175, 0.95);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.65);
    transform: translateY(-1px);
  }
`;
