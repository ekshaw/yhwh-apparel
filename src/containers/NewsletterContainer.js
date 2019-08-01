import Newsletter from '../pages/Newsletter';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    ...state.newsletter
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const NewsletterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Newsletter);

export default NewsletterContainer;
