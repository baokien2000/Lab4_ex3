let button, textbox, message

window.addEventListener('load', () => {
    button = document.getElementsByTagName('button')[0]
    message = document.getElementsByTagName('p')[0]
    textbox = document.getElementById('message')

    button.addEventListener('click', handleButtonClick)
})

function handleButtonClick() {
    alert("You've clicked on the button")
}