import React from "react";
import {InterfacesTask} from "../Interfaces";

interface Props {
    task: InterfacesTask
    completeTask(taskNameToDelete: string): void
}

const TodoTask = ({task, completeTask}: Props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task?.taskName}</span>
                <span>{task?.deadline}</span>
                Task
            </div>
            <button onClick={() => {completeTask(task.taskName)}}>X</button>
        </div>
    )
}

export default TodoTask