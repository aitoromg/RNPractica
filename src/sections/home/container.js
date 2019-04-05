import { connect } from "react-redux";
import View from "./view";
import * as MoviesActions from "../../redux/movies/actions";

const mapStateToProps = state => {
  return {
    moviesList: state.movies.list,
    moviesPage: state.movies.page,
    moviesPageTotal: state.movies.total_pages,
    isFetching: state.movies.isFetching
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getMoviesList: (movies, page) => {
      dispatch(MoviesActions.fetchMoviesList(movies, page));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
