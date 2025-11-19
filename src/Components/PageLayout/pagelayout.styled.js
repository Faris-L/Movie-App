import styled from "styled-components";

// export const AppWrapper = styled.div`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  padding: 24px 16px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 16px 12px 28px;
  }
`;

