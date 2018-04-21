import { connect } from 'react-redux';

import { clickAdd } from 'containers/WorkoutList/redux/actions';
import { changeField } from './redux/actions';
import Form from './Form';

const mapStateToProps = ({ form }) => ({ form });

const mapDispatchToProps = dispatch => ({
  changeField: (fieldName, value) => dispatch(changeField(fieldName, value)),
  clickAdd: (form, id) => dispatch(clickAdd(form, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
