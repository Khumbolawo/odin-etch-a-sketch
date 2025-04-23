import { makeRows } from './createGrid'



// function to prompt user to enter a number for grid size
export function promptUser() {
  // get alert div for notifying user of invalid input and other error states
  let alert = document.getElementById('alert')

  let input = prompt('Enter a number between 1 and 100')
  //   error handling

  // if user cancels input, alert user and return
  if (input == null) {
    console.log('User cancelled input')
    alert.textContent = 'You cancelled the operation'
    alert.className = 'text-sm text-red-300'
    return
  }
  // if user enters empty string, alert user and return
  if (input.trim() === '') {
    alert.textContent = 'You did not enter a value'
    alert.className = 'text-sm text-red-300'
    return
  }

  const size = parseInt(input)

  // if user enters a number outside of range, alert user and return
  if (isNaN(size) || size < 1 || size > 100) {
    alert.textContent =
      'Invalid input. Please enter a number between 1 and 100.'
    alert.className = 'text-sm text-red-300'
    return
  }

  alert.textContent = `Generating a ${size} x ${size} grid...`
  alert.className = 'text-sm text-amber-200'

  makeRows(size, size)
}
