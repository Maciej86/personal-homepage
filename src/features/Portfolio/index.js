import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SmallTile } from "../../common/SamllTile/index";
import { fetchRepoGithub, selectRepoState } from "./slice";
import {
  Wrapper,
  WrapperTile,
  Header,
  Image,
  SmallTitle,
  Title,
} from "./styled";
import Github from "../../common/icons/github.svg";

export const Portfolio = () => {
  const dispatch = useDispatch();
  const repoGithub = useSelector(selectRepoState);

  useEffect(() => {
    dispatch(fetchRepoGithub());
  }, [dispatch]);

  return (
    <Wrapper>
      <Header>
        <Image src={Github} alt="Logo Github" />
        <Title>Portfolio</Title>
        <SmallTitle>My recent projects</SmallTitle>
      </Header>
      <WrapperTile>
        <SmallTile gitRepo={repoGithub} />
      </WrapperTile>
    </Wrapper>
  );
};
