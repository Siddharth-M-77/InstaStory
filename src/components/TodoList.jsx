import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const TodoList = () => {
    const { todos, setTodos, deleteTodo, setEditText, editId, editText, setEditId } = useContext(TodoContext)
    const handleDelete = (id) => () => {
        deleteTodo(id)
    }
    const handleEdit = (id, text) => () => {
        setEditId(id)
        setEditText(text)

    }


    
    return (
        <div className='w-screen h-screen bg-gray-400 p-10 mx-auto overflow-hidden'>

            {
                todos?.map((todo) => (
                    <div key={todo.id} className='flex max-w-md mx-auto p-3 bg-white shadow-xl items-center justify-between gap-10 mt-5'>
                        <p className='text-lg'>{todo.text}</p>
                        <div className='gap-4 flex '>
                            <button onClick={handleDelete(todo.id)} className='px-5 py-2 bg-red-500 text-white text-lg'>Delete</button>
                            <button onClick={handleEdit(todo.id, todo.text)} className='px-5 py-2 bg-green-500 text-white text-lg'>Edit</button>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default TodoList
