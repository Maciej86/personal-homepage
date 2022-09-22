import styled, { css } from "styled-components";

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

export const Text = styled.p`
  max-width: 670px;
  margin: 0;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 1px;
`;

export const Icons = styled.p`
  margin: 56px 0 30px 0;
`;

export const Link = styled.a`
  display: inline-block;
  margin: 0 24px 24px 0;

  &:last-child {
    margin-right: 0;
  }
`;

export const Image = styled.img`
  width: 48px;
  height: 48px;
  filter: invert(7%) sepia(99%) saturate(0%) hue-rotate(187deg) brightness(75%)
    contrast(81%);
  transition: filter 0.8s;

  ${({ toggleTheme }) =>
    toggleTheme &&
    css`
      filter: invert(99%) sepia(10%) saturate(13%) hue-rotate(96deg)
        brightness(117%) contrast(100%);
    `}

  &:hover {
    filter: invert(28%) sepia(75%) saturate(6943%) hue-rotate(203deg)
      brightness(97%) contrast(98%);
  }
`;
