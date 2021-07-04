
import {MyContext} from './MyContext';


export const MyProvider = ({store,children}) =>  {
  return <MyContext.Provider value={store}>
    {children}
  </MyContext.Provider>
}