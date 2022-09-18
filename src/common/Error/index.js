import Danger from "../icons/danger.svg";
import { Wrapper, Title, Text, ParagraphButton, Button } from "./styled";

export const Error = () => {
  return (
    <Wrapper>
      <p>
        <img src={Danger} alt="Error Loading" />
      </p>
      <Title>Ooops! Something went wrong...</Title>
      <Text>Sorry, failed to load Github projects.</Text>
      <Text>You can check them directly on Github.</Text>
      <ParagraphButton>
        <Button href="https://github.com/Maciej86">Go to Github</Button>
      </ParagraphButton>
    </Wrapper>
  );
};
