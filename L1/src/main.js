/** The main.js module for the clilen 
 * 
 * @author Sofie Swagemakers Herou
*/

document.getElementById('convertButton').addEventListener('click', () => {
    const name = document.getElementById('nameInput').value

    // console.log("Button clicked!")

    const asciiName = name
        .split('')
        .map(char => char.charCodeAt(0))
        .join(' ')

    document.getElementById('asciiOutput').textContent = asciiName
})