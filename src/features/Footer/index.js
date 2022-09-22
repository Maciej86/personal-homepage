import { useSelector } from "react-redux";
import { selectTheme } from "../slice";
import { Wrapper, Talk, Email, Text, Icons, Link, Image } from "./styled";
import { ReactComponent as Github } from "../../common/icons/github.svg";
import { ReactComponent as Facebook } from "../../common/icons/facebook.svg";
import { ReactComponent as Linkedin } from "../../common/icons/linkedin.svg";

export const Footer = () => {
  const theme = useSelector(selectTheme);
  return (
    <Wrapper>
      <Talk>LET’S TALK!</Talk>
      <Email href="mailto:maciejrosciszewski@gmail.com">
        maciejrosciszewski@gmail.com
      </Email>
      <Text>
        I've always liked programming, the frontend is my favorite. Currently, I
        would like to start working as a programmer in a professional company.
        If my projects convince you to my person, I am waiting for an e-mail and
        contact on Linkedin.
      </Text>
      <Icons>
        <Link href="https://github.com/Maciej86">
          <Github />
        </Link>
        <Link href="https://www.facebook.com/maciej.rosciszewski.12">
          <Facebook />
        </Link>
        <Link href="https://www.linkedin.com/in/maciej-rościszewski">
          <Linkedin />
        </Link>
      </Icons>
    </Wrapper>
  );
};
