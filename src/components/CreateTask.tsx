import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import Axios from '../helpers/Axios'
import { addTask } from '../store/taskModule'

export const CreateTask: React.VFC = () => {    
    const dispatch = useDispatch()
    const [description, setDescription] = useState('')

    const handleCreate = () => {
        Axios.post(`/api/tasks/`, {
            description: description,
            completed: false
        }).then(res => {
            dispatch(addTask(description))
            setDescription('')
        })
    }
    
    return (
        <div>
            <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }}/>
            <button onClick={handleCreate}>作成</button>
        </div>
    )
}

