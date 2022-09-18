import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 72px;
  padding: 32px;
  background: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: 0px 0px 30px ${({ theme }) => theme.color.shadowTile};
`;

export const Header = styled.h2`
  margin: 0;
  font-weight: 900;
  font-size: 30px;
`;

export const Span = styled.span`
  margin-left: 16px;
  font-size: 22px;
`;

export const Content = styled.div`
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid ${({ theme }) => theme.color.iron};
  font-size: 18px;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const List = styled.ul`
  column-count: 3;
  padding: 0;

  @media (max-width: 1070px) {
    column-count: 2;
  }

  @media (max-width: 800px) {
    column-count: 1;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 0;
  list-style: none;

  &:before {
    content: "";
    display: inline-block;
    min-width: 9px;
    min-height: 9px;
    margin-right: 20px;
    background: ${({ theme }) => theme.color.scienceBlue};
    border-radius: 50%;
  }

  @media (max-width: 350px) {
    &:before {
      margin-right: 10px;
    }
  }
`;
