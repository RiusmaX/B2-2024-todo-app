import { Button, Card, CardHeader, Image } from '@nextui-org/react'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'

function Todo ({ onDelete, openEditModal, todo }) {
  const { title, description, _id } = todo
  return (
    <Card>
      <CardHeader className='flex gap-3'>
        <Image
          alt='nextui logo'
          height={40}
          radius='sm'
          src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
          width={40}
        />
        <div className='flex flex-col flex-grow'>
          <p className='text-md'>{title}</p>
          <p className='text-small text-default-500'>{description}</p>
        </div>
        <div className='flex flex-col'>
          <Button
            variant='light'
            isIconOnly
            onPress={() => onDelete(_id)}
          >
            <FaTrashAlt color='red' />
          </Button>
          <Button
            variant='light'
            isIconOnly
            onPress={() => openEditModal(todo)}
          >
            <FaPenAlt />
          </Button>
        </div>
      </CardHeader>
    </Card>
  )
}

export default Todo
