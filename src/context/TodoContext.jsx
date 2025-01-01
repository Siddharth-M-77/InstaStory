import { createContext, useState } from "react";

export const TodoContext = createContext()


const TodoProvider = ({ children }) => {

    const [todos, setTodos] = useState(() => {
        const localTodos = JSON.parse(localStorage.getItem('todo'))
        return localTodos || []
    })
    const [editId, setEditId] = useState(null)
    const [editText, setEditText] = useState('')




    const addTodo = (text) => {
        const newTodo = { text, id: Date.now() }
        const updatedTodos = [...todos, newTodo]
        setTodos(updatedTodos)
        localStorage.setItem('todo', JSON.stringify(updatedTodos))

    }

    const deleteTodo = (id) => {
        const newTodo = todos.filter((todo) => todo.id !== id)
        setTodos(newTodo)
        localStorage.setItem('todo', JSON.stringify(newTodo))

    }
    const handleSave = () => {
        if (editId && editText) {
            const newTodo = todos.map((todo) => {
                if (todo.id === editId) {
                    return { text: editText, id: editId }
                }
                return todo
            })
            setTodos(newTodo)
            localStorage.setItem('todo', JSON.stringify(newTodo))
            setEditId(null)
            setEditText('')
        }
    }
    return (
        <TodoContext.Provider value={{ addTodo, todos, setTodos, deleteTodo, editId, setEditId, editText, setEditText, handleSave }}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoProvider