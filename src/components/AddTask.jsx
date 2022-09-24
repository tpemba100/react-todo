import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState("");
  const handleInput = (e) => {
    setTask(e.target.value);
  };
  const onClickHandler = () => {
    addTask(task);
  };

  return (
    <div class="row"
        
    >
      <div class="m-5 col-5">
        <input
          type="text"
          class="form-control"
          placeholder="Task Name"
          value={task}
          onChange={handleInput}
        />
      </div>
      <div class="m-5 col-2">
        <button class="btn btn-primary" onClick={onClickHandler}
        >Add Task</button>
      </div>
    </div>
  );
};
export default AddTask;
