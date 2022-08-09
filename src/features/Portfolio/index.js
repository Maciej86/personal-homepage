import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SmallTile } from "../../common/SamllTile/index";
import { fetchRepoGithub, selectRepo } from "../../slice";
import { Wrapper } from "./styled";

export const Portfolio = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepoGithub());
  }, [dispatch]);

  const repoGithub = useSelector(selectRepo);
  console.log(repoGithub);

  return (
    <Wrapper>
      <SmallTile />
    </Wrapper>
  );
};
