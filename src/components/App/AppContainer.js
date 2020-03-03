import { connect } from 'react-redux';

import App from './App';

import * as selectors from '../../redux/tasks/tasksSelectors';
import * as operatons from '../../redux/tasks/tasksOperations';

const mapStateToProps = store => ({
  tasks: selectors.getTasks(store),
});

const mapDispatchToProps = {
  deleteTask: operatons.deleteTask,
  createTask: operatons.createTask,
  addTasks: operatons.getTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
