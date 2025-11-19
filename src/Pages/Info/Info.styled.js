import styled from "styled-components";

export const InfoWrapper = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  color: white;
`;

export const InfoTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 25px;
  text-align: center;
`;

export const InfoSection = styled.div`
  margin-bottom: 30px;
  p {
    margin: 10px 0;
    line-height: 1.6;
  }
`;

export const InfoLink = styled.a`
  color: #79a1f3;
  text-decoration: underline;
  &:hover {
    color: #a3c1ff;
  }
`;
