import { Load, Title, Loader } from "./styled";

export const Loading = () => {
  return (
    <Load>
      <Title>Please wait, projects are being loaded...</Title>
      <Loader></Loader>
    </Load>
  );
};
