import About from '../pages/About';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    ...state.about
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const AboutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(About);

export default AboutContainer;
