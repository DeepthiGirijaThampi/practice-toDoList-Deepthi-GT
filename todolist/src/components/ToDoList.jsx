const ToDoList = ()=>{
    let tasks = ["Learn React","Build a project","Read documentation"]
    return(
        <div className="container">
            <ul className="todo-list">
                {tasks.map((task,index)=>(
                   <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;

