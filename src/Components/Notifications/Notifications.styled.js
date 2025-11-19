import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const NotificationsContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 9999;
`;

export const NotificationWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 400px;
  max-width: 550px;
  min-height: 60px;
  padding: 16px 20px;
  padding-left: 60px;
  border-radius: 8px;
  background-color: rgba(30, 61, 123, 0.85);
  color: #fff;
  font-size: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  animation: ${slideUp} 0.3s ease forwards;
  border: 1px solid rgba(255,255,255,0.2);

  & > span {
    margin-left: 16px;
  }
`;

export const LineIconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4rem;
  border-radius: 8px 0 0 8px;
  background-color: ${(props) => props.color || "#2979ff"};
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    color: #fff;
    font-size: 14px;
  }
`;
