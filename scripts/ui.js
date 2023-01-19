const indexPetContainer = document.getElementById('index-pet-container')
const messageContainer = document.getElementById('message-container')
const showPetContainer = document.getElementById('show-pet-container')

export const onIndexPetSuccess = (pets) => {
    pets.forEach(pet => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h3>${pet.name}</h3>
            <button data-id="${pet._id}">Show Pet</button>
        `
        indexPetContainer.appendChild(div)
    })
}

export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You've got an error!</h3>
        <p>${error}</p>
    `
}

export const onCreatePetSuccess = () => {
    messageContainer.innerText = 'You have created a pet!!'
}

export const onShowPetSuccess = (pet) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${pet.name}</h3>
        <p>${pet.species}</p>
        <p>${pet.breed}</p>
        <p>${pet._id}</p>
    `

    showPetContainer.appendChild(div)
}