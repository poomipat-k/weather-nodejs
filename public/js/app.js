console.log('Client side javascript file is loaded')

const weatherForm = document.querySelector('form')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let search_input = document.querySelector('#address_input')
    const location = search_input.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error){
            messageOne.textContent = data.error
            // Clear input field
            document.querySelector("#address_input").value = ''
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
            // Clear input field
            document.querySelector("#address_input").value = ''
        }
    })
})
})