import React from 'react';
import './tasklist.css';

const TaskList = ({task, handleDeleteTask, handleDone}) => {
    return (
        <div className='taskList' style={{ backgroundColor: task.status }} key={task.id}>
            <p>{task.taskName}</p>
            <div className='btnCase'>
                <button
                    // passing the "(task)_id" of the todo list map as the argument of the function
                    // With an arguement being passed into it the function has to be called in this way
                    className='deleteBtn'
                    onClick={() => handleDeleteTask(task.id)}
                >Del</button>

                <button
                    className='doneBtn'
                    onClick={() => handleDone(task.id)}
                >
                    Done
                </button>
            </div>
        </div>
    )
}

export default TaskList
