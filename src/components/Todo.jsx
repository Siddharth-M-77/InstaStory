import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'
import TodoList from './TodoList'

const Todo = () => {
    const [text, setText] = useState('')
    const { addTodo, editId, handleSave, editText, setEditText } = useContext(TodoContext)
    const handleClick = () => {
        if (input.trim() === "") return false
        addTodo(text)
        setText('')
    }




    return (
        <div className=' p-10'>

            <div className='flex items-center justify-center gap-10'>
                {
                    editId ? <input value={editText} onChange={(e) => setEditText(e.target.value)} type='text' className='px-5 py-2 w-1/2 border-2 border-black' /> : <input value={text} onChange={(e) => setText(e.target.value)} type="text" className='p-4 w-[60%] rounded-lg font-lg border-2 border-indigo-600' />
                }

                {
                    editId ? <button onClick={handleSave} className='px-5 py-2 bg-green-500 text-white text-lg'>Save</button> : <button onClick={handleClick} className='px-5 py-2 bg-black text-white text-lg'>Add Todo</button>
                }
            </div>
            <TodoList />

        </div>
    )
}

export default Todo
