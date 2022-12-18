import { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import { createTodo, readTodo } from './client'

function Todo() {

    const [item, setItem] = useState('')
    const [todos, setTodos] = useState([] as string[])

    const handleSubmit = async (value: string, e: React.FormEvent<HTMLFormElement>) => {
        // spread syntax to copy previous array values https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        // setTodos([value, ...todos])
        e.preventDefault()
        const result = await createTodo(value)
        setTodos([result?.note!, ...todos])
    }

    useEffect(() => {
        async function fetchTodos() {
            const results = await readTodo()
            console.log(results)
            if (results) {
                setTodos(results.map(item => item.note))
            }

        }
        fetchTodos()

    }, []);
    if (!todos) return <div>loading...</div>

    return (
        <div>

            <ul>

                {todos && todos.map((todo, index) => (<TodoItem key={index} todo={todo} />))}
            </ul>
            <form onSubmit={async (e) => handleSubmit(item, e)}>
                <label>Todo:</label>
                <input type="text" id="fname" name="fname" value={item} onChange={(e) => setItem(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Todo