import { KanbanCard } from "./models"
import KanbanCardComp from "./KanbanCardComp"
import "./KanbanColumn.css"

interface KanbanColumnProps {
    kanbanCards: KanbanCard[],
    title: string,
    fetchKanbans: Function
}

export default function KanbanColumn(props: KanbanColumnProps){

    let counter = 0

    return (
        <div className="kanban-column">
            <h1 className="kanban-column-title">{props.title}</h1>
            <div className="kanban-column-flex">
                {props.kanbanCards.map((kanbanCard) => {
                    counter++
                    return <KanbanCardComp fetchKanban={props.fetchKanbans} key={counter - 1} task={kanbanCard}/>
                })}
            </div>
        </div>
    )
}