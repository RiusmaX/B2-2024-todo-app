import { Button, useDisclosure } from '@nextui-org/react'
import { FaPlus } from 'react-icons/fa6'
import AddTodoModal from './AddTodoModal'

function AddTodo ({ onAddTodo }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Button
        className='fixed bottom-8 right-8 w-16 h-16 z-10'
        radius='full'
        color='primary'
        variant='shadow'
        isIconOnly
        onClick={onOpen}
      >
        <FaPlus color='white' size={35} />
      </Button>
      <AddTodoModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        onAddTodo={onAddTodo}
      />
    </>
  )
}

export default AddTodo
