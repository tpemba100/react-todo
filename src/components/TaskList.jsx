import Task from "./Task";

const TaskList = ({tasks, updateTask}) => {

    return (
        <ul class= "list-group list-group-flush">
            {tasks.map((task) => (
                    <Task task={task} key={task.id} 
                    updateTask={updateTask} 
                    />
            ))}
        </ul>
    );
};

export default TaskList;