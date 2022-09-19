import { Wrapper, Talk, Email, Paragraph } from "./styled";

export const Footer = () => {
  return (
    <Wrapper>
      <Talk>LET’S TALK!</Talk>
      <Email href="mailto:maciejrosciszewski@gmail.com">
        maciejrosciszewski@gmail.com
      </Email>
      <Paragraph>
        I've always liked programming, the frontend is my favorite. Currently, I
        would like to start working as a programmer in a professional company.
        If my projects convince you to my person, I am waiting for an e-mail and
        contact on Linkedin.
      </Paragraph>
    </Wrapper>
  );
};
