import { connect } from 'react-redux';
import * as timerActions from '../../redux/timerApp/timerAction';
import Timer from './Timer';

const mapStateToProps = state => ({
  counter: state.timer.value,
  step: state.timer.step,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: step => dispatch(timerActions.timerIncrement(step)),
  onDecrement: step => dispatch(timerActions.timerDecrement(step)),
  onChange: step => dispatch(timerActions.changeStep(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
