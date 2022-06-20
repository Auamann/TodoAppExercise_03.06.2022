import { useState } from "react"
import { postKanban } from "../service/apiService";
import { TaskStatus } from "./models";
import "./FormCss.css"


export default function KanbanForm(){

    const [task, setTask] = useState(' ');
    const [desc, setDesc] = useState(' ')

    const handleClick = () => {
        postKanban({task: task, description: desc, status: TaskStatus.OPEN})

    }

    return (
        <div className='kanbanForm'>
            <input value={task} placeholder='Task' onChange={ev => setTask(ev.target.value)}></input>
            <input value={desc} placeholder='Description' onChange={ev => setDesc(ev.target.value)}></input>
            <button onClick={handleClick}>Add Task</button>
        </div>
    )
}
