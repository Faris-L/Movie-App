import styled from "styled-components";

export const LoginWrapper = styled.div`
  padding: 50px;
  width: 500px;
  margin: 60px auto;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  color: white;
`;

export const LoginTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
`;

export const FormLabel = styled.label`
  display: block;
  margin: 12px 0 5px 0;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.35);
  color: white;

  &::placeholder {
    color: rgba(255, 255, 255);
  }

  &:focus {
    border-color: #2b4c80;
    outline: none;
  }

  margin-bottom: 18px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  margin: 10px 0 25px 0;

  a {
    color: #79a1f3;
    text-decoration: underline;
  }
`;

export const CheckboxInput = styled.input`
  width: 18px;
  height: 18px;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 14px;
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
