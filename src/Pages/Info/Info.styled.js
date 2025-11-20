import styled from "styled-components";

export const InfoWrapper = styled.div`
  max-width: 900px;
  margin: 60px auto;
  padding: 20px;

  color: #e2e8f0;
  animation: fadeIn 0.6s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const InfoTitle = styled.h1`
  font-size: 2.3rem;
  margin-bottom: 35px;
  text-align: center;
  font-weight: 700;
  background: linear-gradient(to right, #79a8ff, #cfe2ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const InfoCard = styled.div`
  background: rgba(255,255,255,0.06);
  padding: 28px;
  margin-bottom: 25px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.35);
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.45);
    border-color: rgba(120,170,255,0.4);
  }

  h2 {
    font-size: 1.4rem;
    margin-bottom: 12px;
    color: #bdd4ff;
  }

  p {
    margin-bottom: 12px;
    color: #d7e3f8;
    line-height: 1.6;
  }
`;

export const InfoLink = styled.a`
  color: #90b8ff;
  font-weight: 500;
  text-decoration: none;
  transition: 0.2s ease;

  &:hover {
    color: #cfe0ff;
    text-shadow: 0 0 8px rgba(150,180,255,0.6);
  }
`;
