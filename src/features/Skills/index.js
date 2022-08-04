import { BigTile } from "../../common/BigTile";
import { List, Item } from "./styled";

export const Skills = () => {
  const ListSkills = (
    <List>
      <Item>Semantic & accessible HTML</Item>
      <Item>Responsive Web Design</Item>
      <Item>CSS BEM convention</Item>
      <Item>CSS Flexbox</Item>
      <Item>CSS Grid</Item>
      <Item>JavaScript: ES6+</Item>
      <Item>Immutability</Item>
      <Item>React</Item>
      <Item>React Hooks</Item>
      <Item>Redux (Toolkit)</Item>
      <Item>React Router</Item>
      <Item>Redux Saga</Item>
      <Item>Promises, Async/Await</Item>
      <Item>Working with API (fetch, axios)</Item>
      <Item>Error handling</Item>
      <Item>NPM</Item>
      <Item>Git</Item>
      <Item>GitHub Pull Requests & Reviews</Item>
      <Item>Markdown</Item>
      <Item>Scrum</Item>
      <Item>Teamwork</Item>
      <Item>Trello</Item>
      <Item>Asana</Item>
      <Item>PHP</Item>
      <Item>WordPress</Item>
      <Item>Themes for WordPress</Item>
    </List>
  );

  return (
    <BigTile
      header={"My skillset includes"}
      images={"🛠️"}
      content={ListSkills}
    />
  );
};
