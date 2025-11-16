import styled from "styled-components";

export const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  /* background: radial-gradient(
      circle at center,
      #3a65a3 0%,
      #1f4374 40%,
      #020a16 100%
    ); */
  /* background-attachment: fixed; */
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 16px 40px;

  @media (max-width: 768px) {
    padding: 16px 12px 28px;
  }
`;
