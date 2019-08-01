import Organizations from '../pages/Organizations';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    ...state.organizations
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const OrganizationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Organizations);

export default OrganizationsContainer;
