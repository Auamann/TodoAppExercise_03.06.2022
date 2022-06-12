import React, {ChangeEvent, FC, useState} from "react";
import "./App.css"
import {InterfacesTask} from "./Interfaces"
import TodoTask from "./Components/TodoTask";


const App: FC = () => {
    const [task, setTask] = useState<string>("")
    const [deadline, setDeadline] = useState<number>(0)
    const [todoList, setTodoList] = useState<InterfacesTask[]>([])

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value)

        } else {
            setDeadline(Number(event.target.value))
        }

    }
    const addTask = (): void => {
        const newTask = {taskName: task, deadline: deadline}
        setTodoList([...todoList, newTask])
        setTask("")
        setDeadline(0)

    }

    const completeTask = (taskNameToDelete: string) : void => {
        setTodoList(
            todoList.filter((task) => {
                return task.taskName != taskNameToDelete
            })
        )
    }

    return (
        <div className="App">
            <div className="header"/>
            <h2>Do! To-Do</h2>
            <div className="inputContainer">
                <input type="text" placeholder="Task" name="task" value={task} onChange={handleChange}/>
                <input type="text" placeholder="Deadline" name="deadline" value={deadline} onChange={handleChange}/>
            </div>
            <button onClick={addTask}>Add To-Do</button>

            <div className="todoList"/>
            {todoList.map((task: InterfacesTask, key: number) => {
                return <TodoTask key={key} task={task} completeTask={completeTask}/>
            })}
        </div>
    )
}

export default App;
