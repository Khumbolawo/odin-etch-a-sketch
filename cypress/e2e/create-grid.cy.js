describe('etch a sketch create grid', () => {
  // code that visits the site before each test
  beforeEach(() => {
    cy.visit('https://khumbolawo.github.io/odin-etch-a-sketch/')
  })

  it('should initialize with a 16*16 grid', () => {
    // check that grid area container loads
    cy.get('#grid-container').should('be.visible')

    // check that grid area loads 16x16 grid items / cells
    cy.get('.grid-item').should('have.length', 256)
  })

  it('should change grid size when button is clicked', () => {
    // check that grid area container loads
    cy.get('#grid-container').should('be.visible')

    cy.get('button').click()

    // stubbing the window.prompt function to return a value of 8
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('8')
    })

    cy.get('button').click()

    // check that grid area loads 8x8 grid items / cells
    cy.get('.grid-item').should('have.length', 64)
  })
})
