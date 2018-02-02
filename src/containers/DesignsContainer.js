import Designs from '../pages/Designs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    content: state.designs
  };
}

const mapDispatchToProps = dispatch => {
  return {};
}

const DesignsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Designs);

export default DesignsContainer;
