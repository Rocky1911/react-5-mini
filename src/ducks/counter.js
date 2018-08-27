const initialState = {
  counterValue: 0,
  previousValues: [],
  futureValues: []
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const UNDO = "UNDO";
const REDO = "REDO";

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        counterValue: state.counterValue + action.amount,
        futureValues: [],
        previousValues: [state.counterValue, ...state.previousValues]
      };

    case DECREMENT:
      return {
        counterValue: state.counterValue - action.amount,
        futureValues: [],
        previousValues: [state.counterValue, ...state.previousValues]
      };
    case UNDO:
      return {
        counterValue: state.counterValue - state.previousValues,
        futureValues: [state.counterValue, ...state.futureValues],
        previousValues: state.previousValues.slice(1)
      };
    case REDO:
      return {
        counterValue: state.futureValues[0],
        futureValues: state.futureValues.slice(1),
        previousValues: [state.counterValue, ...state.previousValues]
      };
    default:
      return state;
  }
}
export function increment(amount) {
  return { amount, type: INCREMENT };
}

export function decrement(amount) {
  return { amount, type: DECREMENT };
}
export function undo() {
  return { type: UNDO };
}
export function redo() {
  return { type: UNDO };
}
