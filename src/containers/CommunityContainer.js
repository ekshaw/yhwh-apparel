import CommunityOutreach from '../pages/CommunityOutreach';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    ...state.community
  };
}

const mapDispatchToProps = dispatch => {
  return {};
}

const CommunityContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommunityOutreach);

export default CommunityContainer;
