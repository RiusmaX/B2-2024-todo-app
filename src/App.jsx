import './App.css'
import TodoList from './components/TodoList'
import { useEffect, useState } from 'react'
import { addTodo, deleteTodo, getTodos, updateTodo } from './services/Api'
import AddTodo from './components/AddTodo'

function App () {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getData = async () => {
      const todosData = await getTodos()
      setTodos(todosData)
    }

    getData()
  }, [])

  const handleAddTodo = async (todo) => {
    const todosData = await addTodo(todo)
    setTodos(todosData)
  }

  const handleDeleteTodo = async (id) => {
    const todosData = await deleteTodo(id)
    setTodos(todosData)
  }

  const handleUpdateTodo = async (todo) => {
    const todosData = await updateTodo(todo)
    setTodos(todosData)
  }

  return (
    <>
      <TodoList
        todos={todos}
        onUpdate={handleUpdateTodo}
        onDelete={handleDeleteTodo}
      />
      <AddTodo
        onAddTodo={handleAddTodo}
      />
    </>
  )
}

export default App
