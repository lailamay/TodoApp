import {PrismaClient} from '@prisma/client'
// File for functions that talk to the database
//server code

const prisma =  new PrismaClient()

export async function createTodo(body: any) { 
    //TODO: Add creation
    try {
        const todo = await prisma.todo.create({
            data: {
                note: body.note
            }
        })
        
        return todo

    } catch (error) {
        console.log(error)
    }
    
}