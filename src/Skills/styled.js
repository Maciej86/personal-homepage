import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 0 115px;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 0;
  list-style: none;

  &:before {
    content: "";
    display: inline-block;
    width: 9px;
    height: 9px;
    background: ${({ theme }) => theme.color.scienceBlue};
    border-radius: 50%;
  }
`;
