import { connect } from 'react-redux';
import WorkoutList from './WorkoutList';

import { orderBy } from './redux/actions';

const mapStateToProps = ({ workoutList }) => ({ workoutList });

const mapDispatchToProps = dispatch => ({
  changeOrder: (fieldName, asc) => dispatch(orderBy(fieldName, asc)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutList);
