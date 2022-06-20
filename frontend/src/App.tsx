import React, { useState, useEffect } from 'react';
import KanbanColumn from './Components/KanbanColumn';
import KanbanForm from './Components/KanbanForm';
import {getKanbans} from "./service/apiService"
import { KanbanCard, TaskStatus } from './Components/models';
import "./App.css"
import {BrowserRouter} from "react-router-dom";
import KanbanCardComp from "./Components/KanbanCardComp";



function App() {
    const [kanbans, setKanbans] = useState<Array<KanbanCard>>([])

    const fetchKanbans = () => {
        getKanbans().then(data => {
            setKanbans(data)
        })
    }

    useEffect(() => {


        fetchKanbans()
    }, [])


    return (

        <div>
            <h2 className="Header"> Überschrift </h2>
            <KanbanForm/>
            <div className='column-flex'>
                <KanbanColumn fetchKanbans={fetchKanbans} title={TaskStatus.OPEN}
                              kanbanCards={kanbans.filter(kanban => kanban.status === TaskStatus.OPEN)}/>
                <KanbanColumn fetchKanbans={fetchKanbans} title={TaskStatus.IN_PROGRESS}
                              kanbanCards={kanbans.filter(kanban => kanban.status === TaskStatus.IN_PROGRESS)}/>
                <KanbanColumn fetchKanbans={fetchKanbans} title={TaskStatus.DONE}
                              kanbanCards={kanbans.filter(kanban => kanban.status === TaskStatus.DONE)}/>
            </div>
        </div>


)
}

export default App
