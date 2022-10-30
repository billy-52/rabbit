document.getElementById('navbarBottomSend').addEventListener('click', () => {
    console.log(validateContent(getMessageContent()))
})

function getMessageContent(input_id='navbarBottomInput') {
    return document.getElementById(input_id).value
}

function validateContent(content) {
    if (content.length > 0) {
        return true
    }
    return false
}

function getTimeDate() {
    const timestamp = new Date()
    return `${timestamp.getHours()}:${timestamp.getMinutes()} - ${timestamp.getDate()}.${timestamp.getMonth() + 1}.${timestamp.getFullYear()}`
}

