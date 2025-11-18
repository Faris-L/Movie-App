// src/Pages/Login/login.styled.js
import styled from "styled-components";

export const LoginWrapper = styled.div`
  padding: 50px;
  max-width: 450px;
  margin: 50px auto;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  color: white;
  text-align: center;
`;

export const LoginTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 25px;
`;

export const FormLabel = styled.label`
  display: block;
  margin: 12px 0 5px 0;
  font-weight: 500;
  text-align: left;
`;

export const Input = styled.input`
  display: block;
  width: 95%;
  margin: 0 auto 15px auto;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.3);
  color: white;
  font-family: "Poppins", sans-serif;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    border-color: #2b4c80;
    outline: none;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  margin-bottom: 20px;
  a {
    color: #79a1f3;
    text-decoration: underline;
  }
`;

export const CheckboxInput = styled.input`
  width: 16px;
  height: 16px;
`;

export const LoginButton = styled.button`
  padding: 12px 25px;
  background: #1e3d7b;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: #2b4c80;
  }
`;
