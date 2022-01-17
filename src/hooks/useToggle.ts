import { useState } from "react";

function useToggle(initVal = true): [boolean, () => void] {
  const [state, setState] = useState(initVal);
  const toggle = () => setState(st => !st);
  return [state, toggle];
}

export default useToggle;