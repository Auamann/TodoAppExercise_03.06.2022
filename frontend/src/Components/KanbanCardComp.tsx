import {KanbanCard, TaskStatus} from "./models"
import { promoteKanban, demoteKanban, deleteKanban, postKanban } from "../service/apiService";
import "./KanbanCardComp.css"
import { useEffect, useState } from "react";
import {NavLink} from "react-router-dom";



interface KanbanCardCompProps {
    task: KanbanCard,
    fetchKanban: Function
}

export default function KanbanCardComp(props: KanbanCardCompProps) {

    const [editMode, setEditMode] = useState(false);
    const [task, setTask] = useState(props.task.task);
    const [desc, setDesc] = useState(props.task.description)

    useEffect(()=>{
        postKanban({
            task: task,
            description: desc,
            status: props.task.status,
            id: props.task.id
        })
        props.fetchKanban();
    },[task, desc])

    const promote = () => {
        promoteKanban(props.task);
        props.fetchKanban()
    }

    const demote = () => {
        demoteKanban(props.task);
        props.fetchKanban()
    }

    const delKanban = () => {
        deleteKanban(props.task)
        props.fetchKanban()
    }

    const editKanban = () => {
        setEditMode(editMode=>!editMode)
    }


    return (
        <div className={`kanban-card ${editMode && "edit-mode"}`}>
            <NavLink to="/edit">
            <button className="kanban-edit-btn" onClick={editKanban}>Edit</button>
            </NavLink>
    {editMode ?
                <>
                    <input onChange={(ev)=>{setTask(ev.target.value)}} value={task} className="edit-mode kanban-edit-task"></input>
                    <input onChange={(ev)=>{setDesc(ev.target.value)}} value={desc} className="edit-mode kanban-edit-desc"></input>
                </> :
                <>
                    <h1>{props.task.task}</h1>
                    <p>{props.task.description}</p>
                </>
            }
            <div className="buttons">
                {props.task.status !== TaskStatus.OPEN ? <button onClick={demote}>Prev </button> : <button onClick={delKanban}>Delete</button>}
                {props.task.status !== TaskStatus.DONE ? <button onClick={promote}>Next</button> : <button onClick={delKanban}>Delete</button>}
            </div>


        </div>
    )
}