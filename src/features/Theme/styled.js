import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  text-align: right;
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.slateGray};
  text-transform: uppercase;

  @media (max-width: 570px) {
    display: none;
  }
`;

export const Button = styled.button`
  width: 47px;
  height: 27px;
  margin-left: 10px;
  background: ${({ theme }) => theme.color.iron};
  border: 1px solid ${({ theme }) => theme.color.slateGray};
  border-radius: 25px;
  cursor: pointer;
`;

export const Span = styled.span`
  display: inline-block;
  margin-left: 0;
  padding: 1px 4px;
  background: ${({ theme }) => theme.color.slateGray};
  border-radius: 50%;
  transform: translateX(-10px);
  transition: transform 0.5s, background 0.5s;

  ${({ toggleTheme }) =>
    toggleTheme &&
    css`
      background: ${({ theme }) => theme.color.white};
      transform: translateX(8px);
    `}
`;

export const Img = styled.img`
  width: 14px;
  height: 14px;
`;
