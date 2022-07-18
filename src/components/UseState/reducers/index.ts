import { ActionShape, State } from "../types";

const reducer = (state: State, action: ActionShape): State => {
  switch (action.type) {
    case "VALUE":
      return {
        ...state,
        value: action.payload,
      };
    case "CONFIRM":
      return {
        ...state,
        error: false,
        confirmed: true,
      };
    case "RESET":
      return {
        ...state,
        confirmed: false,
        deleted: false,
      };
    default:
      return state;
  }
};

export { reducer };
