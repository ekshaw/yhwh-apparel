import Footer from '../components/Footer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    ...state.footer
  };
}

const mapDispatchToProps = dispatch => {
  return {};
}

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);

export default FooterContainer;
