import { useState } from 'react'
import Todo from './Todo'
import { useDisclosure } from '@nextui-org/react'
import AddTodoModal from './AddTodoModal'

function TodoList ({ todos }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [todoToEdit, setTodoToEdit] = useState()

  const handleOpenEditModal = (todo) => {
    setTodoToEdit(todo)
    onOpen()
  }

  return (
    <>
      <div className='flex flex-col gap-4 py-2 px-4'>
        {
          todos.map((todo) => {
            return (
              <Todo
                key={todo._id}
                todo={todo}
                openEditModal={handleOpenEditModal}
              />
            )
          })
        }
      </div>
      <AddTodoModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        todoToEdit={todoToEdit}
      />
    </>
  )
}

export default TodoList
