import { combineReducers } from "@reduxjs/toolkit";
import tasksModule from "./taskModule";

const rootReducer = combineReducers({
    tasks: tasksModule.reducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer