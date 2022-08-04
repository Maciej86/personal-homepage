import { Wrapper, Header, Span, Content } from "./styled";

export const BigTile = ({ header, images, content }) => (
  <Wrapper>
    <Header>
      {header} <Span>{images}</Span>
    </Header>
    <Content>{content}</Content>
  </Wrapper>
);
