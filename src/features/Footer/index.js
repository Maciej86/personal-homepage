import { Wrapper, Talk, Email, Text, Icons, Link, Image } from "./styled";
import Github from "../../common/icons/github.svg";
import Facebook from "../../common/icons/facebook.svg";
import Linkedin from "../../common/icons/linkedin.svg";
import { useSelector } from "react-redux";
import { selectTheme } from "../slice";

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
          <Image src={Github} alt="Github" toggleTheme={theme} />
        </Link>
        <Link href="https://www.facebook.com/maciej.rosciszewski.12">
          <Image src={Facebook} alt="Facebook" toggleTheme={theme} />
        </Link>
        <Link href="https://www.linkedin.com/in/maciej-rościszewski">
          <Image src={Linkedin} alt="Linkedin" toggleTheme={theme} />
        </Link>
      </Icons>
    </Wrapper>
  );
};
