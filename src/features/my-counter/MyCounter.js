import { useEffect, useState } from 'react';
import {incrementMyCounter,decrementMyCounter} from '../my-counter/MyCounterSlice';
import { useMyDispatch, useMySelector, useMySelector2 } from './helper/hooks';

const MyCounter = () => {

  // const [count, setCount] = useState(store.getState().myCounter.count);

  // useEffect(() => {
  //   const subScription = store.subscribe(()=> {
  //     setCount(store.getState().myCounter.count);
  //   });
  //   return () => {
  //     subScription();
  //   }
  // }, []);
  
  const count = useMySelector2((store)=>store.getState().myCounter.count);

  const dispatch = useMyDispatch();
  
  return <>
    <div>
      <button onClick={()=> {dispatch(decrementMyCounter())}}>
        -
      </button>
      <span>
        {count}
      </span>
      <button onClick={() => {dispatch(incrementMyCounter())}}>
        +
      </button>
      
    </div>  
    

  </>
}

export {MyCounter};