import { FETCH_SUCCESS, FETCH_FAILURE } from "./action-type";

export interface CommandAction {
  type: typeof FETCH_SUCCESS | typeof FETCH_FAILURE;
  payload: null;
}

export const fetchSuccess = (): CommandAction => ({
  type: FETCH_SUCCESS,
  payload: null
});

export const fetchFailure = (): CommandAction => ({
  type: FETCH_FAILURE,
  payload: null
});
