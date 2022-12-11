type createItemResponse = {
    createdAt: string
    id: string
    note: string
    updatedAt: string
}

export async function createTodo(note: string): Promise<createItemResponse | undefined> {
    try {
        const response = await fetch('/api/create', {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({note})
        })
        
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
   
}
