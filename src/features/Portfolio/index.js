import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SmallTile } from "../../common/SamllTile/index";
import { fetchRepoGithub, selectRepo } from "../../slice";
import { Wrapper } from "./styled";

export const Portfolio = () => {
  const dispatch = useDispatch();
  const repoGithub = useSelector(selectRepo);
  console.log(repoGithub);

  useEffect(() => {
    dispatch(fetchRepoGithub());
  }, [dispatch]);

  return (
    <Wrapper>
      <SmallTile />
    </Wrapper>
  );
};
