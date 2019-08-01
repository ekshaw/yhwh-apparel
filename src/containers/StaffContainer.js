import Staff from '../pages/Staff';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  console.log(state.staff);
  return {
    ...state.staff
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const StaffContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Staff);

export default StaffContainer;
