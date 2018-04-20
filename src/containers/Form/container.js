import { connect } from 'react-redux';
import Form from './Form';

import { changeField } from './redux/actions';

const mapStateToProps = ({ form }) => ({ form });

const mapDispatchToProps = dispatch => ({
  changeField: (fieldName, value) => dispatch(changeField(fieldName, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
