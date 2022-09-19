import styled from "styled-components";

export const Wrapper = styled.footer`
  margin-top: 80px;
`;

export const Talk = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const Email = styled.a`
  display: inline-block;
  margin: 24px 0;
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.mineShaft};
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: ${({ theme }) => theme.color.scienceBlue};
  }
`;

export const Paragraph = styled.p`
  max-width: 670px;
  margin: 0;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 1px;
`;
