import express from 'express'
import bodyParser from 'body-parser'
import {createTodo, readTodo, deleteTodo} from './service'
import { Prisma } from '@prisma/client'

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World')
})

// Endpoint to create Todo
app.post('/api/create', async (req, res) => {
  try {
    const todo = await createTodo(req.body)
    console.log(todo)
    res.send('Todo item created')
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(error)
      res.status(400).send(error.message)
    }
  }
    
    
})

// Endpoint to read Todo
app.get('/api/read', async (req, res) => {
  try {
    const todos = await readTodo()
    res.send(todos)
  }catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(error)
      res.status(400).send(error.message)
    }
  }
})

// Endpoint to delete Todo
app.get('/api/delete', async (req, res) => {
  try {
  const todo = await deleteTodo(req.query.id)
  res.send('Todo deleted')
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(error)
      res.status(400).send(error.message)
    }
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})