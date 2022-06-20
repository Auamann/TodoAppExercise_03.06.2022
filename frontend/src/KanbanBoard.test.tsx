import { render, waitFor, screen} from "@testing-library/react"
import axios, { AxiosError } from "axios"

import { MemoryRouter } from "react-router-dom"
// @ts-ignore
import KanbanBoard from "../components/KanbanBoard"
// @ts-ignore
import { KanbanCard, Tag, TaskStatus } from "../service/models"
export {}
// jest.mock("axios");

test("Kanbans render", async ()=> {
    const tags: Array<Tag> = [
        {tag: "Test", color: "#385732"},
        {tag: "test", color: "#385532"}
    ]

    const tasks: Array<KanbanCard> = [
        {
            task: "Aufräumen",
            description: "Beschreibung",
            status: TaskStatus.OPEN,
            tags: [{tag: "Test", color: "#385732"}],
            id: "id"

        },{
            task: "Spülmaschine ausräumen",
            description: "Beschreibung",
            status: TaskStatus.OPEN,
            tags: [{tag: "test", color: "#385532"}],
            id: "id1"
        }
    ]

    jest.spyOn(axios, "get").mockImplementation((url: string)=>{
        switch (url) {
            case "http://localhost:8080/api/kanban":
                return Promise.resolve({
                    data:
                    tasks
                })
            case "http://localhost:8080/api/kanban/tags":
                return Promise.resolve({
                    response:
                    tags
                })
            default:
                return Promise.resolve({
                    data:{
                        tasks
                    }
                })
        }
    })

    render(
        <MemoryRouter>
            <KanbanBoard/>
        </MemoryRouter>
    )

    await waitFor(()=>{
        expect(screen.getByTestId("kanban0")).toBeDefined()
    })

    await waitFor(()=>{
        expect(screen.getByTestId("kanban1")).toBeDefined()
    })
})

test('schould show ErrorPage Id searching for non existing Tag', async ()=>{

    const tags: Array<Tag> = [
        {tag: "Test", color: "#385732"},
        {tag: "test", color: "#385532"}
    ]

    const tasks: Array<KanbanCard> = [
        {
            task: "Aufräumen",
            description: "Beschreibung",
            status: TaskStatus.OPEN,
            tags: [{tag: "Test", color: "#385732"}],
            id: "id"

        },{
            task: "Spülmaschine ausräumen",
            description: "Beschreibung",
            status: TaskStatus.OPEN,
            tags: [{tag: "test", color: "#385532"}],
            id: "id1"
        }
    ]

    jest.spyOn(axios, "get").mockImplementation((url: string)=>{
        switch (url) {
            case "http://localhost:8080/api/kanban":
                return Promise.reject({
                    response: {
                        status: 404
                    }
                } as AxiosError)
            case "http://localhost:8080/api/kanban/tags":
                return Promise.resolve({
                    response:
                    tags
                })
            case 'http://localhost:8080/api/kanban/t/faultyTag':
                return Promise.reject({
                    response: {
                        status: 404
                    }
                } as AxiosError)
            default:
                return Promise.resolve({
                    data:{
                        tasks
                    }
                })
        }
    })

    render(
        <MemoryRouter initialEntries={["/t/faultyTag"]}>
            <KanbanBoard/>
        </MemoryRouter>
    )
    await waitFor(()=>{
        expect(screen.getByTestId("404").innerHTML).toBeDefined();
    })
})