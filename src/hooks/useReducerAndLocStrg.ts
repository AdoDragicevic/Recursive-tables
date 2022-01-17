import { Dispatch, Reducer, ReducerAction, ReducerState, useEffect, useReducer } from "react";

function useReducerAndLocStrg<R extends Reducer<any, any>>(reducer: R, initState: ReducerState<R>, key: string): [ReducerState<R>, Dispatch<ReducerAction<R>>] {

  const [state, dispatch] = useReducer(reducer, initState, () => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : initState;
  });

  useEffect( () => localStorage.setItem(key, JSON.stringify(state)) , [state, key] );

  return [state, dispatch];
}

export default useReducerAndLocStrg;