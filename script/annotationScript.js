const description = document.querySelectorAll('.description')

const buttonCreate = document.querySelector('#btn-create')
const buttonEdit = document.querySelector('#btn-note-edit') // review
const buttonClose = document.querySelector('#btn-close-card')

const coverCard = document.querySelector('.uncover-card')
const cardAdd = document.querySelector('.card-add-disabled')
const cardEdit = document.querySelector('.card-edit-disabled') // review

function textHidden(element, limitNumber) {
    let text = element.textContent

    if (text.length > limitNumber) {
        let subText = text.substring(0, limitNumber) + '...'
        element.textContent = subText
    }
}

description.forEach((div) => {
    let textDescription = div.querySelector('#text-description')
    textHidden(textDescription, 90)
})

buttonCreate.addEventListener('click', () => {
    coverCard.className = 'cover-card'
    cardAdd.className = 'card-add'
})

buttonEdit.addEventListener('click', () => {
    coverCard.className = 'cover-card'
    cardEdit.className = 'card-edit'
})

buttonClose.addEventListener('click', () => {
    coverCard.className = 'uncover-card'
    cardEdit.className = 'card-add-disabled'
})