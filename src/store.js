import { createStore, action, computed } from "easy-peasy";

export default createStore({
  currentValue: '',
  setCurrentValue: action((state, payload)=>{
    state.currentValue = payload;
  }),

  calculation: '',
  setCalculation: action((state, payload)=>{
    state.calculation = payload;
  }),

  previousValue: '',
  setPreviousValue: action((state, payload)=>{
    state.previousValue = payload;
  }),

  operation: '',
  setOperation: action((state, payload)=>{
    state.operation = payload;
  }),

  handleClick: thunk((actions, payload, helpers)=>{
    const {currentValue} = helpers.getState();
    actions.setCurrentValue(payload);
    actions.setPreviousValue( (PrevValue) => PrevValue + currentValue);
  }),

  handleOperationClick: thunk((actions, op, helpers)=>{
    const { currentValue } = helpers.getState();
    if(currentValue === '') return;
    actions.setPreviousValue(currentValue);
    actions.setOperation(op);
    actions.setCurrentValue('');
  }),

  handleEqualsButton: thunk((actions, helpers)=>{
    const {previousValue, currentValue, operation} = helpers.getState();
    if(previousValue === '' || currentValue === '') return;
    const result = calculateResult(previousValue, currentValue, operation);
    actions.setCalculation(result);
    actions.setPreviousValue('');
    actions.setOperation('');
  }), 

  handleClear: thunk((actions)=>{
    actions.setCurrentValue('');
    actions.setCalculation('');
    actions.setOperation('');
  }),

  calculateResult: thunk((prev, curr, op)=>{
    const prevNum = parseInt(prev)
    const currNum = parseInt(curr);

    switch (op) {
      case '+':
        return (prevNum + currNum).toString();
      case '-':
        return (prevNum - currNum).toString();
      case '*':
        return (prevNum * currNum).toString();
      case '/':
        return (prevNum / currNum).toString();
      default:
        return;
    }
  })

})