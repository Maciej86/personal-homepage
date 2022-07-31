import MyFoto from "./maciej_rosciszewski.webp";
import "normalize.css";
import {
  HeaderWrapper,
  Foto,
  Image,
  Content,
  ThisIs,
  Name,
  Paragraph,
} from "./styled";

const Header = () => (
  <HeaderWrapper>
    <Foto>
      <Image src={MyFoto} alt="Maciej Rościszewski" />
    </Foto>
    <Content>
      <ThisIs>THIS IS</ThisIs>
      <Name>Maciej Rościszewski</Name>
      <Paragraph>
        I'm a passionate Frontend Developer in love with React, currently
        looking for new job opportunities.
      </Paragraph>
    </Content>
  </HeaderWrapper>
);

export default Header;
