import styled from "styled-components";

export const ProfileWrapper = styled.div`
  padding: 30px;
  color: white;
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const OptionsRow = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
`;


export const Greeting = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const FieldLabel = styled.label`
  font-size: 0.9rem;
  margin-top: 5px;
`;

export const FieldInput = styled.input`
  padding: 8px;
  font-size: 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  background: transparent;
  color: white;
  width: 250px;

  &:focus {
    outline: none;
    border-color: #ffffffaa;
  }
`;

export const OptionsButton = styled.button`
  padding: 6px 12px;
  margin-right: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`;

export const NewsSection = styled.div`
  text-align: right;
`;

export const NewsTitle = styled.h3`
  border-bottom: 2px solid white;
  display: inline-block;
  padding-bottom: 2px;
  margin-bottom: 20px;
  color: white;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: rgba(0, 0, 0, 0.85);
  padding: 30px;
  border-radius: 10px;
  color: white;
  width: 400px;
  max-width: 90%;
`;

export const ModalTitle = styled.p`
  margin-bottom: 15px;
`;

export const ModalInput = styled.input`
  padding: 8px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: transparent;
  color: white;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border-color: #ffffffaa;
  }
`;

export const ModalButton = styled.button`
  padding: 6px 12px;
  margin-right: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`;
