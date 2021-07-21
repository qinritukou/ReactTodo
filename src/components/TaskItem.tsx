import React from "react";
import { useDispatch } from "react-redux";
import Axios from "../helpers/Axios";
import { Task } from "../models/types";
import tasksModule, { deleteTask, doneTask } from "../store/taskModule";


interface Props {
    task: Task
}


const TaskItem: React.FC<Props> = ({task}) => {
    const dispatch = useDispatch()

    const handleDelete = (task: Task)=> {
        Axios.delete(`/api/tasks/${task.id}`).then(res => {
            dispatch(deleteTask(task))
        })
    }

    return (
        <li className={task.completed ? 'done': ''}>
            <label>
                <input
                    type="checkbox"
                    className="checkbox-input"
                    onClick={() => dispatch(doneTask(task)) }
                    defaultChecked={ task.completed }
                />
                <span className="checkbox-label">{ task.description } </span>
            </label>
            <button 
                onClick={ () => handleDelete(task) }
                className="btn is-delete"
            >削除</button>
        </li>
    )
}

export default TaskItem