import { createContext, useState } from "react";
const dataContext = createContext();

export const DataProvider = ({children})=> {
  const [currentValue, setCurrentValue] = useState('');
  const [calculation, setCalculation] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  const [operation, setOperation] = useState('');


  return(
    <dataContext.Provider value={{
         calculation, previousValue, currentValue, operation,setCalculation,setPreviousValue,setCurrentValue,setOperation
    }}>
      {children}
    </dataContext.Provider>
  )
}

export default dataContext;