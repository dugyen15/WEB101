import { useState } from 'react'
import useTodoStore from '../store/todoStore'

function TodoInput() {
  const [text, setText] = useState('')
  const addTodo = useTodoStore((state) => state.addTodo)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      addTodo(text)
      setText('')
    }
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default TodoInput