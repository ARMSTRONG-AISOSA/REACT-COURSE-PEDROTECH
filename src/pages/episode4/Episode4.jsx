import React, { useState } from 'react';
import './episode4.css';
import TaskList from '../../components/taskList/TaskList';

const Episode4 = () => {

    // [] : empty array
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");
    // const [status, setStatus] = useState("white");


    const addTask = () => {
        if (newTask === "") {
            return;
        } else {

            const task = {
                // [todoList.length]: get the number(length) of array
                // [todoList.length - 1]: move back to previous element, i.e. last element before what is being added
                // [todoList.length - 1].id: get id number
                // todoList[todoList.length - 1].id + 1: increase id number by 1 (for the new element)
                id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
                taskName: newTask,
                status: 'white'
            };

            setTodoList([...todoList, task]);
            setNewTask(""); // Reset the input field
        }
    }

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

    // Method 1: a new array is created without what you want to delete and assigned to setTodoList
    // const handleDeleteTask = (taskName) => {
    //     const newTodoList = todoList.filter((task) => {
    //         if (task === taskName) {
    //             return false;
    //         } else {
    //             return true;
    //         }
    //     })

    //     setTodoList(newTodoList);
    // }

    // Method 2
    const handleDeleteTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id))
    }

    const handleDone = (id) => {
        setTodoList(todoList.map(task =>
            task.id === id
                ? { ...task, status: task.status === 'white' ? '#82E282' : 'white' }
                : task

            // { ...task, ... }: This is the spread operator, which creates a shallow copy of the task object. This ensure all existing properties of task are included in the new object.
            // If it matches, it creates a new task object with the status property toggled between 'white' and '#82E282'.
            // If it does not match, it returns the original task object.
        )
        );
    };

    return (
        <div className='container '>
            <div className='episode4'>
                <div className='taskEntry'>
                    <h1 className='headingText'>Episode4</h1>

                    <div className='addTask'>
                        <input type="text"
                            value={newTask} // Bind the input value to the state
                            onChange={handleChange}
                            placeholder='Enter New Task' />

                        <button
                            onClick={addTask}
                        >Add Task</button>
                    </div>
                </div>

                <div className='list'>
                    {todoList.map((task, index) => {
                        return <TaskList
                            key={task.id}
                            task={task}
                            handleDeleteTask={handleDeleteTask}
                            handleDone={handleDone}
                        />;
                    })}
                </div>

            </div>

        </div>
    )
}

export default Episode4

