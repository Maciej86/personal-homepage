import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "../slice";
import { Wrapper, Text, Button, Span, Img } from "./styled";
import LightTheme from "../../common/icons/on_light.svg";
import DarkTheme from "../../common/icons/on_dark.svg";

export const Theme = () => {
  const theme = useSelector(selectTheme);
  console.log(theme);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Text>DARK MODE {theme ? "ON" : "OFF"}</Text>
      <Button onClick={() => dispatch(toggleTheme())}>
        <Span toggleTheme={theme}>
          <Img src={theme ? DarkTheme : LightTheme} alt="" />
        </Span>
      </Button>
    </Wrapper>
  );
};
