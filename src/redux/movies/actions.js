import * as types from "./types";
import * as api from "../../webservices";

function updateMoviesList(list, total) {
  return {
    type: types.MOVIES_UPDATE_LIST,
    list: list,
    total
  };
}

export function fetchMoviesList() {
  return function(dispatch, getState) {
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
      });
  };
}