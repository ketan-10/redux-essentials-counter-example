import { useReducer,useLayoutEffect, useRef } from "react";
import { useState, useEffect, useContext } from "react";
// import { store } from "../../../app/store";
import {MyContext} from "./MyContext";

export function useMySelector(selector){

  const store = useContext(MyContext); 

  const [value, setValue] = useState(selector(store));

  useEffect(() => {
    const subScription = store.subscribe(()=> {
      setValue(selector(store));
    });
    return () => {
      subScription();
    }
  }, [store,selector]);


  return value;
}



export function useMySelector2(selector){

  const store = useContext(MyContext); 


  
  const [, forceRender] = useReducer((s) => s + 1, 0);
  
  const v = selector(store);
  const [oldState,setOldState] = useState(v);

  useLayoutEffect(() => {

    const unSub = store.subscribe(() => {

      const value = selector(store);
      if(oldState.current === undefined || !oldState === value){
        // oldState.current = value;
        // forceRender();
        setOldState(value);
      }
    });
    return () => unSub();
  }, []);

  
  return v;
}

export function useMyDispatch(){
  const store = useContext(MyContext);
  return store.dispatch; 
}