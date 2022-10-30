class Message {
    constructor(type = '', sender = '', content = '') {
        // error handling for type
        if (type != 'in' && type != 'out') {
            console.error(`Message.type must be 'in' or 'out'. Given: ${type}`)
        }
        else {
            this.type = type
            // if type is out then sender and content are needed to send message
            // else type is in so sender and content will be recieved
            if (type == 'out') {
                // if param doesnt pass then set undefined
                // all params will be sent as string

                // error handling and warning for sender
                if (typeof sender != 'string') {
                    console.warn(`Message.sender has a type of '${typeof sender}' but will be converted to a string.`)
                }
                sender = new String(sender)
                if (sender.length == 0) {
                    console.error('Message.sender must be longer than 0 characters.')  
                }
                else {
                    this.sender = sender
                }
                
                // error handling and warning for content
                if (typeof content != 'string') {
                    console.warn(`Message.content has a type of '${typeof content}' but will be converted to a string.`)
                }
                content = new String(content)
                if (content.length == 0) {
                    console.error('Message.content must be longer than 0 characters.')
                }
                else {
                    this.content = content
                }
            }
        }
    }

    canExecute() {
        // check if all parameters are set so method can execute correctly
        error = 'Can not execute a method in Message object. Required parameter:'

        if (this.type != undefined && this.type != '') { // this.sender != undefined && this.content != undefined
            return true
        }
        console.error(error + ' not set correctly.')
        return false
    }

    toConsole() {
        // used for debugging and console applications
        if (this.canExecute()) {
            console.log(`\nMessage from ${this.sender} at ${undefined}:\n${this.content}\n`)
        }
    }
}

msg = new Message('out')
console.log(msg.type)
msg.toConsole()