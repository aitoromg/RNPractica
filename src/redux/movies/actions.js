import * as types from "./types";
import * as api from "../../webservices";

function updateMoviesList(list, total) {
  return {
    type: types.MOVIES_UPDATE_LIST,
    list: list,
    total
  };
}

function updateFetching(value) {
  // ACCIÓN PURA
  return {
    type: types.MOVIES_UPDATE_FETCHING,
    value
  };
}

export function fetchMoviesList() {
  return function(dispatch, getState) {
    dispatch(updateFetching(true));
    api
      .fetchMovies()
      .then(res => {
        const list = res.data.results;
        const total = res.data.total_pages;
        console.log("fetchMoviesList ok: ", list);
        dispatch(updateMoviesList(list, total));
      })
      .catch(err => {
        console.error("fetchMovies err: ", err);
      })
      .finally(() => dispatch(updateFetching(false)));
  };
}