export enum TaskStatus {
    OPEN = "OPEN",
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "DONE"
}

export interface KanbanCard {
    task: string,
    description: string,
    status: TaskStatus,
    id?: string
}