import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 90px;
  text-align: center;
`;

export const Title = styled.h3`
  margin: 0 0 32px 0;
  font-size: 24px;
`;

export const Text = styled.p`
  margin: 4px 0;
`;

export const ParagraphButton = styled.p`
  margin-top: 32px;
`;

export const Button = styled.a`
  padding: 12px 16px;
  background: ${({ theme }) => theme.color.buttonBackground};
  border-radius: ${({ theme }) => theme.radius};
  font-weight: 700;
  color: ${({ theme }) => theme.color.buttonText};
  text-decoration: none;
`;
