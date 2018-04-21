import { connect } from 'react-redux';
import WorkoutList from './WorkoutList';

import { orderBy } from './redux/actions';

const mapStateToProps = ({ workoutList }) => ({ items: workoutList.items });

const mapDispatchToProps = dispatch => ({
  changeOrder: fieldName => dispatch(orderBy(fieldName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutList);
