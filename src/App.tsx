import './App.css';
import TaskList from './components/TaskList';
import { CreateTask } from './components/CreateTask';

function App() {
  return (
    <div className="App">
      <CreateTask></CreateTask>
      <TaskList></TaskList>
    </div>
  );
}

export default App;
