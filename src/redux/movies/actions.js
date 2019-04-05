import * as types from "./types";
import * as api from "../../webservices";

function updateMoviesList(list, page, total_pages) {
  return {
    type: types.MOVIES_UPDATE_LIST,
    list,
    page,
    total_pages
  };
}

function updateFetching(value) {
  // ACCIÓN PURA
  return {
    type: types.MOVIES_UPDATE_FETCHING,
    value
  };
}

export function fetchMoviesList(movieList, page) {
  return function(dispatch, getState) {
    dispatch(updateFetching(true));
    api
      .fetchMovies(page)
      .then(res => {
        const list = !movieList ? res.data.results : movieList.concat(res.data.results);
        const page = res.data.page;
        const total_pages = res.data.total_pages;
        dispatch(updateMoviesList(list, page, total_pages));
      })
      .catch(err => {
        console.error("fetchMovies err: ", err);
      })
      .finally(() => dispatch(updateFetching(false)));
  };
}