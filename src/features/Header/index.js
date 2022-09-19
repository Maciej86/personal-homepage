import MyFoto from "./maciej_rosciszewski.webp";
import Message from "../../common/icons/message.svg";
import "normalize.css";
import {
  Wrapper,
  Foto,
  Image,
  Content,
  ThisIs,
  Name,
  Paragraph,
  Email,
} from "./styled";

export const Header = () => (
  <Wrapper>
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
      <Email href="mailto:maciejrosciszewski@gmail.com">
        <img src={Message} alt="" />
        Hire Me
      </Email>
    </Content>
  </Wrapper>
);
