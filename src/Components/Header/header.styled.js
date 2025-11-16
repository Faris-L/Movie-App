import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 16px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: transparent;
  /* background: linear-gradient(
    180deg,
    rgba(2, 10, 22, 0.98),
    rgba(2, 10, 22, 0.9)
  );
  border-bottom: 1px solid rgba(79, 127, 194, 0.4); */
  backdrop-filter: blur(10px);

  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoDot = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 8px;
  background: radial-gradient(
    circle at 30% 20%,
    #4f7fc2,
    #1f4374 60%,
    #020a16 100%
  );
  box-shadow: 0 0 18px rgba(79, 127, 194, 0.7);
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #e5e7eb;

  span {
    color: #1f4a85ff;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
  justify-content: center;

  @media (max-width: 900px) {
    display: none; 
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 0.95rem;
  text-decoration: none;
  color: #ffffffff;
  opacity: 0.8;
  transition: 0.2s ease;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;

  &:hover {
    opacity: 1;
    color: #ffffff;
  }

  &.active {
    color: #4f7fc2;
    opacity: 1;
    border-bottom-color: #4f7fc2;
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LoginButton = styled.button`
  padding: 8px 18px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-size: 0.95rem;
  text-decoration: none;
  font-weight: 600;
  background: linear-gradient(135deg, #3a65a3, #4f7fc2);
  color: #f9fafb;
  box-shadow: 0 0 15px rgba(79, 127, 194, 0.5);
  transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 0 20px rgba(79, 127, 194, 0.7);
    opacity: 0.95;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 0 10px rgba(79, 127, 194, 0.5);
  }
`;
