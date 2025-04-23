// function that takes rows and columns and creates a grid using DOM methods and flexbox
export function makeRows(rows, cols) {
  const container = document.getElementById('grid-container')

  container.innerHTML = ''

  container.style.width = '100%'
  container.style.display = 'flex'
  container.style.flexWrap = 'wrap'

  const cellWidth = 100 / cols

  let cell
  for (let c = 0; c < rows * cols; c++) {
    cell = document.createElement('div')
    cell.className = 'grid-item'

    // setting flex properties for every cell
    cell.style.width = `${cellWidth}%`
    cell.style.boxSizing = 'border-box'
    cell.style.flexGrow = '0'
    cell.style.flexShrink = '0'

    // cell.style.paddingBottom = `${cellWidth}%`
    cell.style.position = 'relative'

    container.appendChild(cell)
  }

  // function to add event listener to every cell so that it can change color when hovered over
  const cells = document.querySelectorAll('.grid-item')
  cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
      cell.classList = `grid-item transition-colors duration-300 bg-amber-300`
    })
  })
}
