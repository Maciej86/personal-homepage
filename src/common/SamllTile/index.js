import { Wrapper, Title, Paragraph, Repo, Text, Link } from "./styled";

export const SmallTile = () => {
  return (
    <Wrapper>
      <Title>Przykładowy tytuł</Title>
      <Paragraph>
        React application featuring my skills, things I want to learn, my
        projects and my contact details.
      </Paragraph>
      <Repo>
        <Text>Demo:</Text>
        <Link>https://grzedomin.github.io/personal-homepage/</Link>
      </Repo>
      <Repo>
        <Text>Code:</Text>
        <Link>https://grzedomin.github.io/personal-homepage/</Link>
      </Repo>
    </Wrapper>
  );
};
