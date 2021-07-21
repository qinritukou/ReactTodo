import React, { Component, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Axios from '../helpers/Axios'
import { RootState } from '../store/rootRecuder'
import TaskItem from './TaskItem'
import { setTasks } from '../store/taskModule'

const TaskList: React.VFC = () => {
    const { tasks } = useSelector((state: RootState) => state.tasks)
    const dispatch = useDispatch()

    
    useEffect(() => {
        Axios.get(`/api/tasks`).then(res => {
            dispatch(setTasks(res.data))
        })
    }, [])

    
    return (
        <ul>
            {
                tasks.map(task => (
                    <TaskItem key={task.id} task={task}></TaskItem>
                ))    
            }
        </ul>
    )
}

export default TaskList
