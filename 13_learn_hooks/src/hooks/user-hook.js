import { useContext } from "react";
import { PersonContext, ThemeContext } from "../App";


function useUserHook() {
  const user = useContext(PersonContext);
  const theme = useContext(ThemeContext);

  return [user, theme];
}

export default useUserHook;