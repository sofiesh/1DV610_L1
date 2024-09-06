/**
 * The main.js module for the client.
 *
 * @author Sofie Swagemakers Herou
 */

import { asciiName } from './asciiName.js'
import { animalSearch } from './searchAnimal.js'
import { generateAPIPoem } from './generateAPIPoem.js'

document.getElementById('convertButton').addEventListener('click', () => {
  const name = document.getElementById('nameInput').value // Get the value of the input field
  const nameToAscii = asciiName(name) // Call the asciiName function from the asciiName module
  document.getElementById('asciiOutput').textContent = nameToAscii // Set the text content of the output element to the asciiName
})

document.getElementById('generatePoemButton').addEventListener('click', () => {
  const name = document.getElementById('poemNameInput').value
  const poem = generateAPIPoem(name)
  document.getElementById('poemOutput').textContent = poem
})

document.getElementById('animalSearchButton').addEventListener('click', () => {
  const animal = document.getElementById('animalInput').value // Get the value of the input field

  const searchAnimal = animalSearch(animal) // Call the animalSearch function from the searchAnimal module

  document.getElementById('animalOutput').textContent = searchAnimal // Set the text content of the output element to searchAnimal
})
