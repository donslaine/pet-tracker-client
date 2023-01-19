export const indexPet = () => {
    return fetch(`http://localhost:8000/pets`)
}

export const createPet = (data) => {
    return fetch(`http://localhost:8000/pets`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showPet = (id) => {
    return fetch(`http://localhost:8000/pets/${id}`)
}