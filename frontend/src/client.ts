type createItemResponse = {
    createdAt: string
    id: string
    note: string
    updatedAt: string
}

type readItemResponse = {
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
            body: JSON.stringify({ note })
        })

        const data = await response.json()
        
        return data
    } catch (error) {
        console.log(error)
    }

}

export async function readTodo(): Promise<readItemResponse[] | undefined> {
    try {
        const response = await fetch('/api/read', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const data = await response.json()
        
        return data
    } catch (error) {
        console.log(error)
    }

}
