import { makeRows } from './createGrid'
import { promptUser } from './getUserInput'

function initializeGrid(size = 16) {
  makeRows(size, size)
}

// run function to initialize grid after page is loaded
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    initializeGrid()

    const gridSizeButton = document.querySelector('button')
    gridSizeButton.addEventListener('click', promptUser)
  })
}

export { initializeGrid, promptUser }
