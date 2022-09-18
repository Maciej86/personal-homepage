import styled from "styled-components";

export const Load = styled.div`
  margin-top: 90px;
`;

export const Title = styled.p`
  margin-bottom: 48px;
  font-size: 20px;
  text-align: center;
`;

export const Loader = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border: 11px solid ${({ theme }) => theme.color.iron};
  border-left-color: ${({ theme }) => theme.color.scienceBlue};
  border-radius: 50%;
  animation: spinLoad 0.7s infinite linear;

  @keyframes spinLoad {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
