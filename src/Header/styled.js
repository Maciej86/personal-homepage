import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  gap: 66px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Foto = styled.div`
  width: 398px;
  height: 398px;

  @media (max-width: 570px) {
    width: 250px;
    height: auto;
  }

  @media (max-width: 300px) {
    width: 150px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
`;

export const Content = styled.div`
  width: 40%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ThisIs = styled.p`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.color.salateGray};
`;

export const Name = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.color.mineShaft};
`;

export const Paragraph = styled.p`
  margin-top: 20px;
  color: ${({ theme }) => theme.color.salateGray};
`;
