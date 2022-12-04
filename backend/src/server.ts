import express from 'express'
import bodyParser from 'body-parser'
import {createTodo} from './service'

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World')
})

// Endpoint to create Todo
app.post('/api/create', async (req, res) => {
    const todo = await createTodo(req.body)
    console.log(todo)
    res.send('Todo item created')
    
})

// Endpoint to delete Todo
app.get('/api/delete', async (req, res) => {
  console.log(req.query)
  res.send('Todo deleted')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})