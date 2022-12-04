import express from 'express'
import {createTodo} from './service'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Endpoint to create Todo
app.post('/api/create', (req, res) => {
    const {body} = req
    const todo = createTodo(body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})