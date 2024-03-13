import { Button, Input, Select, SelectItem, Switch, Textarea } from '@nextui-org/react'
import { useState } from 'react'

function TodoForm ({ todoToEdit, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    title: todoToEdit?.title || '',
    description: todoToEdit?.description || '',
    status: todoToEdit?.status[0] || 'TODO',
    important: todoToEdit?.important || false
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (onSubmit) onSubmit(formData, todoToEdit?._id)
    onClose()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-5'
    >
      <Input
        name='title'
        type='text'
        label='Title'
        labelPlacement='inside'
        variant='flat'
        value={formData.title}
        onChange={handleChange}
      />
      <Textarea
        name='description'
        type='text'
        label='Description'
        labelPlacement='inside'
        minRows={3}
        maxRows={10}
        isMultiline
        variant='flat'
        value={formData.description}
        onChange={handleChange}
      />
      <Select
        name='status'
        label='Status'
        variant='flat'
        onChange={handleChange}
        value={formData.status}
        defaultSelectedKeys={[formData.status]}
      >
        <SelectItem key='TODO' value='TODO' textValue='To Do'>To Do</SelectItem>
        <SelectItem key='IN-PROGRESS' value='IN-PROGRESS' textValue='In Progress'>In Progress</SelectItem>
        <SelectItem key='DONE' value='DONE' textValue='Done'>Done</SelectItem>
        <SelectItem key='CANCELED' value='CANCELED' textValue='Canceled'>Canceled</SelectItem>
        <SelectItem key='ARCHIVED' value='ARCHIVED' textValue='Archived'>Archived</SelectItem>
      </Select>
      <Switch
        label='Important'
        value={formData.important}
        isSelected={formData.important}
        onValueChange={
          (isChecked) => setFormData({ ...formData, important: isChecked })
        }
      >
        Important
      </Switch>
      <Button type='submit'>
        {todoToEdit ? 'Mettre à jour' : 'Ajouter'}
      </Button>
    </form>
  )
}

export default TodoForm
