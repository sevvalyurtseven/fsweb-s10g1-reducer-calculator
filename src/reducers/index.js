import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  MEMORY_ADD,
  MEMORY_RECALL,
  MEMORY_CLEAR,
} from "./../actions";

export const initialState = {
  display: 0,
  isNewOperation: true,
  total: 0,
  operation: "+",
  memory: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case APPLY_NUMBER:
      const display =
        state.isNewOperation || state.display == 0
          ? action.payload.toString()
          : state.display.toString() + action.payload.toString();
      return {
        ...state,
        display: Number(display),
        isNewOperation: false,
      };

    case CHANGE_OPERATION:
      const result = calculateResult(
        state.total,
        state.display,
        state.operation
      );
      return {
        ...state,
        operation: action.payload,
        total: result,
        display: result,
        isNewOperation: true,
      };

    case CLEAR_DISPLAY:
      return {
        ...state,
        total: 0,
        display: 0,
        isNewOperation: true,
      };

    case MEMORY_ADD:
      return {
        ...state,
        memory: state.total,
      };

    case MEMORY_RECALL:
      return {
        ...state,
        total: calculateResult(state.total, state.memory, state.operation),
        display: state.total,
      };

    case MEMORY_CLEAR:
      return {
        ...state,
        memory: 0,
      };

    default:
      return state;
  }
};

export default reducer;
