import logo from './logo.svg';
import './App.css';
import Heading from "./components/Heading";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]); //simply creating a Add task function,
                                       
  const addTask = (taskName) => {
    const currentTasks = [...tasks];  //using reference without chaning value
    currentTasks.push({                //pushing object values to current task with itterating id number, and boolen false
      id: tasks.length + 1,
      isCompleted: false,
      isDeleted: false,
      taskName,
    });
                            //updating setTaks with values
    setTasks(currentTasks);
  };

  const updateTask = (id, key, value) => {
    const currentTask = [...tasks];
    const newTasks = currentTask.map((task)=>{
      if(task.id === id) {
        task[key] = value;
        return task;
      }
      return task;
    });
    setTasks(newTasks);

  };

  console.log(tasks)
  return (
    <div class='App'>
      <Heading/>
      <AddTask addTask={addTask}/>
      <TaskList tasks={tasks} updateTask={updateTask} />
    </div>
  );
}

export default App;
