import Home from '../pages/Home';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    ...state.home
  };
}

const mapDispatchToProps = dispatch => {
  return {};
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default HomeContainer;
