import { useDispatch } from "react-redux";
import { toggleTheme } from "../slice";

export const Theme = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(toggleTheme())}>Przełącz</button>;
};
