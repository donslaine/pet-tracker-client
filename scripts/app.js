import { onFailure, onCreatePetSuccess, onIndexPetSuccess, onShowPetSuccess } from './ui.js'
import { createPet, indexPet, showPet } from './api.js'

const createPetForm = document.getElementById('create-pet-form')
const indexPetContainer = document.getElementById('index-pet-container')

indexPet()
    .then(res => res.json())
    .then(res => {
        onIndexPetSuccess(res.pets)
    })
    .catch(onFailure)

createPetForm.addEventListener('submit', (event)=> {
    event.preventDefault()

    const petData = {
        pet: {
            name: event.target['name'].value,
            species: event.target['species'].value,
            breed: event.target['breed'].value
        }
    }

    createPet(petData)
        .then(onCreatePetSuccess)
        .catch(onFailure)
})

indexPetContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')

    showPet(id)
        .then(res => res.json())
        .then(res => onShowPetSuccess(res.pet))
        .catch(onFailure)
})