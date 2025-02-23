import React, { useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {

    const inputRef = useRef();

    const [todoList, setTodoList] = useState([]);

    const add = () => {
        const inputVal = inputRef.current.value
        console.log(inputVal)

        const newTodo = {
            id: Date.now(),
            text: inputVal,
            isComplete: false,
        }

        setTodoList((prev) =>
            [...prev, newTodo]       //Using spread operator to update the complete array
        );

        inputRef.current.value = '';
    }

    const delete_task = (id) => {
        setTodoList((prevState) => {
            return prevState.filter((prevTodo) => prevTodo.id !== id)
        })
    }

    const toggleTick = (id) => {
        setTodoList((prevTodoList) =>
            prevTodoList.map((item) =>
                item.id === id ? ({ ...item, isComplete: !item.isComplete }) : (item)
            )
        );
    };



    return (
        <div className='bg-white place-self-center flex flex-col w-5/12 rounded-xl min-h-[550px] p-7'>

            {/* Title */}
            <div className='mt-7 flex'>
                <img className='w-8' src={todo_icon} alt="" />
                <h1 className='text-3xl font-semibold'>To-Do List</h1>
            </div>

            {/* Input fields */}

            <div className='bg-gray-200 flex items-center my-7 rounded-full'>
                <input ref={inputRef} className='flex-1 px-5 h-14 outline-none' type='text' placeholder='add your task' />
                <button onClick={add} className='bg-orange-600 h-14 rounded-full w-32 text-white text-lg font-medium sm:text-sm'>ADD +</button>
            </div>

            {/* To do Items */}
            <div>
                {todoList.map((item, index) => {
                    return (<TodoItems
                        key={index}
                        text={item.text}
                        delTask={() => delete_task(item.id)}
                        toggleClick={() => toggleTick(item.id)}
                        tickCheck={item.isComplete} />)
                })
                }
            </div>


        </div>
    )
}

export default Todo