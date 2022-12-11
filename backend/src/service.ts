import {PrismaClient} from '@prisma/client'
// File for functions that talk to the database
//server code

const prisma =  new PrismaClient()

export async function createTodo(body: any) { 
    //TODO: Add creation
        return await prisma.todo.create({
            data: {
                note: body.note
            }
        })
}

export async function readTodo() {
    return await prisma.todo.findMany()
}

export async function deleteTodo(todoId: any) {
        return await prisma.todo.delete({
            where: {
                id: todoId
            }
        })
}

