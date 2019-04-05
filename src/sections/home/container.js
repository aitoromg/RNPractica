import { connect } from "react-redux";
import View from "./view";
import * as MoviesActions from "../../redux/movies/actions";

const mapStateToProps = state => {
  return {
    moviesList: state.movies.list,
    isFetching: state.movies.isFetching
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getMoviesList: () => {
      dispatch(MoviesActions.fetchMoviesList());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
