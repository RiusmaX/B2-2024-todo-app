import { Button } from '@nextui-org/react'
import './App.css'
import TodoList from './components/TodoList'
// import Clock from './components/Clock'

const todos = [
  {
    title: 'TODO 1',
    description: 'TODO DESCRIPTION 1'
  },
  {
    title: 'TODO 2',
    description: 'TODO DESCRIPTION 2'
  },
  {
    title: 'TODO 3',
    description: 'TODO DESCRIPTION 3'
  },
  {
    title: 'TODO 4',
    description: 'TODO DESCRIPTION 4'
  }
]

function App () {
  return (
    <>
      <TodoList
        todos={todos}
      />
      <Button
        color='primary'
      >
        Mon Bouton
      </Button>
    </>
  )
}

export default App
