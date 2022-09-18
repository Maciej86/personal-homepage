import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 72px;
`;

export const Header = styled.div`
  text-align: center;
`;

export const Image = styled.img``;

export const Title = styled.h2`
  margin: 8px 0;
  font-size: 30px;
`;

export const SmallTitle = styled.p`
  margin: 0 0 24px 0;
`;

export const WrapperTile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;
