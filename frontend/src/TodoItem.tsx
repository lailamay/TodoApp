import { useState } from 'react'

function TodoItem({todo}: {todo: string}) {
  return (
    <li>
        {todo}
    </li>
  )
}

export default TodoItem