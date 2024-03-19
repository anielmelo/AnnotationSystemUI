const description = document.querySelectorAll('.description')
const textDescription = document.querySelector('#text-description')

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
