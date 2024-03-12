import './App.css'
import TodoList from './components/TodoList'
import { useEffect, useState } from 'react'
import { addTodo, getTodos } from './services/Api'
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
    await addTodo(todo)
  }

  return (
    <>
      <TodoList
        todos={todos}
      />
      <AddTodo
        onAddTodo={handleAddTodo}
      />
    </>
  )
}

export default App
