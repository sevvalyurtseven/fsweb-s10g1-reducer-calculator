export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const CLEAR_DISPLAY = "Ekrandaki Degeri Sıfırlar"

export const MEMORY_ADD = "Memory'e Totali Ekler"

export const MEMORY_RECALL = "Memory'deki değer şu anki total değerine aktarılır"

export const MEMORY_CLEAR = "Memory'i Sıfırlar"


export const memoryAdd = () => {
  return ({ type: MEMORY_ADD });
};

export const memoryRecall = () => {
  return ({ type: MEMORY_RECALL });
};

export const memoryClear = () => {
  return ({ type: MEMORY_CLEAR });
};

export const addOne = () => {
  return ({ type: ADD_ONE });
};

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: number });
};

export const changeOperation = (operation) => {
  return ({
    type: CHANGE_OPERATION, payload: operation
  });
};

export const clearDisplay = () => {
  return ({ type: CLEAR_DISPLAY });
};