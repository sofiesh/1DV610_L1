/**
 * The start of the application.
 * 
 * @author Sofie Swagemakers Herou
 */

import readline from 'readline'
// import Font from 'ascii-art-font'
// const Font = require('ascii-art-font')

// Read the input from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Font.fontPath = 'Fonts'

const textToAscii = (text) => {
    return text.split('').map(char => char.charCodeAt(0))
}

const asciiToText = (asciiArray) => {
    return asciiArray.map(code => String.fromCharCode(code)).join('')
}

rl.question('What is your name? ', name => {
    console.log(`Hello ${name}!`)
    const asciiName = textToAscii(name)
    const nameAscii = asciiToText(asciiName)
    console.log('Convert text to ascii: ' + asciiName)
    console.log('Convert ascii to text: ' + nameAscii)

    // Font.create('Font hello: ' + name, 'Doom', function(err, ascii) {
    //     console.log(ascii)
    // })
    rl.close()
})


// console.log('Hello World!')
