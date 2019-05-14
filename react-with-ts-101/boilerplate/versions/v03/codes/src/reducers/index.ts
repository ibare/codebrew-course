import { StoreState } from "../types";
import { FETCH_SUCCESS, FETCH_FAILURE } from "../actions/action-type";
import * as Actions from "../actions";

const initializeState: StoreState = {
  success: 0,
  failure: 0
};

function mainReducer(
  state: StoreState = initializeState,
  action: Actions.CommandAction
) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        success: state.success + Math.floor(Math.random() * (100 - 1) + 1)
      };
    case FETCH_FAILURE:
      return {
        ...state,
        failure: state.failure + Math.floor(Math.random() * (2 - 0))
      };
    default:
      return Object.assign({}, state);
  }
}

export default mainReducer;
