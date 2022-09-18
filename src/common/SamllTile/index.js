import { Wrapper, Title, Paragraph, Repo, Text, Link } from "./styled";

export const SmallTile = ({ gitRepo }) => {
  return gitRepo?.map((repo) => (
    <Wrapper key={repo.id}>
      <Title>{repo.name}</Title>
      <Paragraph>{repo.description}</Paragraph>
      <Repo>
        <Text>Demo:</Text>
        <Link href={repo.homepage}>{repo.homepage}</Link>
      </Repo>
      <Repo>
        <Text>Code:</Text>
        <Link href={repo.html_url}>{repo.html_url}</Link>
      </Repo>
    </Wrapper>
  ));
};
