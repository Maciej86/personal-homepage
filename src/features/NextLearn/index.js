import { BigTile } from "../../common/BigTile";
import { List, Item } from "../../common/BigTile/styled";

export const NextLearn = () => {
  const ListNextLearn = (
    <List>
      <Item>TypeScript</Item>
      <Item>React Native</Item>
      <Item>More React</Item>
    </List>
  );
  return (
    <BigTile
      header={"What I want to learn next"}
      images={"🚀"}
      content={ListNextLearn}
    />
  );
};
