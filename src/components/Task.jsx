
const Task = ({task, updateTask}) => {
    return (
        <div class="d-flex flex-row"
            style={{
                marginLeft: "40px",
                backgroundColor: "gray" ,
                width: "600px",
            }}
        >
            
            <li class="list-group-item m-2" 
                style={{width:"400px",
                textDecoration: task.isCompleted ? "line-through" : "",
                display: task.isDeleted ? "none" : "",
                "background-color": task.isCompleted ? "gray" : "" ,

            }}
            >
                {task.taskName}
            </li>
            <button class="btn btn-primary m-2"
                style={{display: task.isDeleted ? "none" : "",
                        width: "130px",
                        backgroundColor: task.isCompleted ? "gray" : "blue" ,
                        color : task.isCompleted ? "black" : "white",

                }}
                onClick={()=> {
                    updateTask(task.id, "isCompleted", !task.isCompleted);}}
            >
                {!task.isCompleted? "Complete" : "Completed"}
            </button>

            <button class="btn btn-primary m-2" 
                style={{display: task.isDeleted ? "none" : "",
                        backgroundColor : "#9b0404" ,
                        color : "white",
                        borderColor: "#9b0404"

                }}
                onClick={()=> {
                    updateTask(task.id, "isDeleted", true);}}
            >
                DELETE
            </button>
        </div>
    );
};

export default Task;