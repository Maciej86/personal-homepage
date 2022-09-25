import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  gap: 66px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Foto = styled.div`
  width: 364px;
  height: 364px;

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
  color: ${({ theme }) => theme.color.textColorLight};
`;

export const Name = styled.h1`
  margin: 0;
  font-size: 38px;
  color: ${({ theme }) => theme.color.textColor};
`;

export const Paragraph = styled.p`
  margin-top: 20px;
  color: ${({ theme }) => theme.color.textColorLight};
  line-height: 1.5;
`;

export const Email = styled.a`
  display: flex;
  align-items: center;
  width: 150px;
  gap: 19px;
  margin-top: 32px;
  padding: 12px 16px;
  background: ${({ theme }) => theme.color.buttonBackground};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius};
  font-weight: 700;
  color: ${({ theme }) => theme.color.buttonText};
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.4s;

  &:hover {
    opacity: 0.8;
  }
`;
