import * as types from "./types";

const initialState = {
  list: [],
  page: 0,
  total_pages: 0,
  isFetching: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.MOVIES_UPDATE_LIST:
      return {
        ...state,
        list: action.list,
        page: action.page,
        total_pages: action.total_pages
      };

    case types.MOVIES_UPDATE_FETCHING:
      return {
        ...state,
        isFetching: action.value
      };

    default:
      return state;
  }
}
