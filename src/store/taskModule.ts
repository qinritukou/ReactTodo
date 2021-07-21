import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../models/types";

type State = {
    count: number
    tasks: Task[]
}

const initialState: State = {
    count: 0,
    tasks: []
}

const tasksModule = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks(state: State, action: PayloadAction<Task[]>) {
            state.count = action.payload.length 
            state.tasks = action.payload
        },
        addTask (state: State, action: PayloadAction<string>) {
            state.count++

            const newTask: Task = {
                id: state.count,
                description: action.payload,
                completed: false
            }

            state.tasks = [...state.tasks, newTask]
        },
        doneTask (state: State, action: PayloadAction<Task>) {
            const task = state.tasks.find(t => t.id === action.payload.id)

            if (task) {
                task.completed = !task.completed
            }
        },
        deleteTask (state: State, action: PayloadAction<Task>) {
            state.count--
            state.tasks = state.tasks.filter(t => t.id !== action.payload.id)
        }
    }
})

export const {
    setTasks, addTask, doneTask, deleteTask
} = tasksModule.actions

export default tasksModule