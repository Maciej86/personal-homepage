import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SmallTile } from "../../common/SamllTile/index";
import { fetchRepoGithub, selectRepoLoading, selectRepoState } from "../slice";
import {
  Wrapper,
  WrapperTile,
  Header,
  Image,
  SmallTitle,
  Title,
} from "./styled";
import Github from "../../common/icons/github.svg";
import { Loading } from "../../common/Loading";
import { Error } from "../../common/Error";

export const Portfolio = () => {
  const dispatch = useDispatch();
  const repoGithub = useSelector(selectRepoState);
  const loading = useSelector(selectRepoLoading);
  console.log(loading);

  useEffect(() => {
    dispatch(fetchRepoGithub());
  }, [dispatch]);

  let render = "";

  switch (loading) {
    case "loading":
      render = <Loading />;
      break;
    case "success":
      render = (
        <>
          <WrapperTile>
            <SmallTile gitRepo={repoGithub} />
          </WrapperTile>
        </>
      );
      break;
    default:
      render = <Error />;
  }

  return (
    <Wrapper>
      <Header>
        <Image src={Github} alt="Logo Github" />
        <Title>Portfolio</Title>
        <SmallTitle>My recent projects</SmallTitle>
      </Header>
      {render}
    </Wrapper>
  );
};
