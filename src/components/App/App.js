import React, { Component } from 'react';

const newTasks = { name: 'take this', description: 'something to say' };

class App extends Component {
  componentDidMount() {
    const { addTasks } = this.props;

    addTasks();
  }
  render() {
    const { tasks, deleteTask, createTask } = this.props;
    return (
      <>
        <h1>Tasks:</h1>
        {tasks && (
          <ul>
            {tasks.map(task => (
              <li key={task.id}>
                <h3>{task.name}</h3>
                <p>{task.description}</p>
                <button type="button" onClick={() => deleteTask(task.id)}>
                  delete
                </button>
              </li>
            ))}
          </ul>
        )}
        <button type="button" onClick={() => createTask(newTasks)}>
          Add task
        </button>
      </>
    );
  }
}

export default App;
