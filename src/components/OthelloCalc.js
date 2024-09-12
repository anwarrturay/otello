import React, { useContext } from 'react';
import dataContext from '../context/CalculationData';
const OthelloCalc = () => {
  const { 
    calculation, previousValue, currentValue, operation,setCalculation, setCurrentValue, setOperation, setPreviousValue
  } = useContext(dataContext);


    const handleClick = (value) =>{
      // setPreviousValue(prevValue => prevValue + value);
      setCurrentValue(currValue=> currValue.concat(value));
      console.log(currentValue);
    }
  
    const handleOperationClick = (op)=>{
      if (previousValue) {
        const result = calculateResult(previousValue, currentValue, operation);
        setCalculation(result);
        setPreviousValue(result);
      } else {
        setPreviousValue(currentValue);
      }
  
      setOperation(op);
      setCurrentValue('');
    }
  
    const handleEqualsButton = ()=>{
      if (previousValue === '' || currentValue === '') return;

      const result = calculateResult(previousValue, currentValue, operation);
      setCalculation(result);
      setPreviousValue(result);
      setCurrentValue('');
      setOperation('');
    }
  
    const handleClear = ()=>{
      setCurrentValue('');
      setPreviousValue('');
      setCalculation('');
      setOperation('');
    }
  
    const calculateResult = (previousValue, currentValue, operation)=>{
      const prevNum = parseFloat(previousValue)
      const currNum = parseFloat(currentValue);
  
      switch (operation) {
        case '+':
          return (prevNum + currNum).toString();
        case '-':
          return (prevNum - currNum).toString();
        case '*':
          return (prevNum * currNum).toString();
        case '/':
          return (prevNum / currNum).toString();
        default:
          return '';
      }
    }


  return (
    <div className='frame'>
      <h1>Othello</h1>
      <div className="calc-area">
        <div className='value'>
          {previousValue === '' && operation === '' && currentValue === ''? 0: (
            <>
              <div className="display">
                  <div className='prevCalc'>
                    {previousValue}{operation}
                  </div>
                  <div>{currentValue || ''}</div>
              </div>
              <div className="total">
                {calculation}
              </div>
            </>
            )
          }
        </div>
      </div>
      <div className="buttons-section">

        <div className="row-1">
          <button 
            type='button'
            onClick={()=> handleClear()}
          >AC</button>
          <button 
            type='button'
            onClick={()=> handleOperationClick('+/-')}
          > +/- </button>
          <button
            type='button'
            onClick={()=> handleOperationClick('%')}
          >%</button>
          <button 
            type='button'
            onClick={()=> handleOperationClick('/')}
          >/</button>
        </div>

        <div className="row-2">
          <button 
            type='button'
            onClick={()=> handleClick('7')}
          >7</button>
          <button 
            type='button'
            onClick={()=> handleClick('8')}
          >8</button>
          <button 
            type='button'
            onClick={()=> handleClick('9')}
          >9</button>
          <button 
            type='button'
            onClick={()=> handleOperationClick('*')}
          >*</button>
        </div>

        <div className="row-3">
          <button 
            type='button'
            onClick={()=> handleClick('4')}
          >4</button>
          <button 
            type='button'
            onClick={()=> handleClick('5')}
          >5</button>
          <button 
            type='button'
            onClick={()=> handleClick('6')}
          >6</button>
          <button 
            type='button'
            onClick={()=> handleOperationClick('-')}
          >-</button>
        </div>

        <div className="row-4">
          <button 
            type='button'
            onClick={()=> handleClick('1')}
          >1</button>
          <button 
            type='button'
            onClick={()=> handleClick('2')}
          >2</button>
          <button 
            type='button'
            onClick={()=> handleClick('3')}
          >3</button>
          <button 
            type='button'
            onClick={()=> handleOperationClick('+')}
          >+</button>
        </div>

        <div className="row-5">
          <button 
            type='button' 
            className='zero'
            onClick={()=> handleClick('0')}
          >0</button>
          <button 
            type='button'
            onClick={()=> handleOperationClick('.')}
          >.</button>
          <button 
            type='button'
            onClick={()=> handleEqualsButton()}
          >=</button>
        </div>

      </div>
    </div>
  )
}

export default OthelloCalc;
