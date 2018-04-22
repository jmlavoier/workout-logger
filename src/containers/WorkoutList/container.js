import { connect } from 'react-redux';
import WorkoutList from './WorkoutList';

import { orderBy, clickRemove } from './redux/actions';

const mapStateToProps = ({ workoutList }) => ({
  items: workoutList.items,
  orderBy: workoutList.orderBy,
});

const mapDispatchToProps = dispatch => ({
  changeOrder: fieldName => dispatch(orderBy(fieldName)),
  clickRemove: id => dispatch(clickRemove(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutList);
