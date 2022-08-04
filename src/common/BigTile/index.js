import { Wrapper, Header, Content } from "./styled";

export const BigTile = ({ header, content }) => (
  <Wrapper>
    <Header>{header}</Header>
    <Content>{content}</Content>
  </Wrapper>
);
