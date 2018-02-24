import Missions from '../pages/Missions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    ...state.missions
  };
}

const mapDispatchToProps = dispatch => {
  return {};
}

const MissionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Missions);

export default MissionsContainer;
