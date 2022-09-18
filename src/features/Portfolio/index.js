import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SmallTile } from "../../common/SamllTile/index";
import { fetchRepoGithub, selectRepoState } from "../../slice";
import { Wrapper } from "./styled";

export const Portfolio = () => {
  const dispatch = useDispatch();
  const repoGithub = useSelector(selectRepoState);

  useEffect(() => {
    dispatch(fetchRepoGithub());
  }, [dispatch]);

  return (
    <Wrapper>
      <SmallTile gitRepo={repoGithub} />
    </Wrapper>
  );
};
