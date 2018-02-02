import Nav from '../components/Nav';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    logo: state.logo
  };
}

const mapDispatchToProps = dispatch => {
  return {};
}

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);

export default NavContainer;
