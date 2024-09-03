/** The main.js module for the clilen 
 * 
 * @author Sofie Swagemakers Herou
*/

document.getElementById('convertButton').addEventListener('click', () => {
    const name = document.getElementById('nameInput').value

    const asciiArt = name
        .split('')
        .map(char => char.charCodeAt(0))
        .join(' ')

    document.getElementById('asciiOutput').textContent = asciiArt
})