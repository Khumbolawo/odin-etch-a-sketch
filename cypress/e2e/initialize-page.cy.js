describe('etch a sketch initial load', () => {
  // code that visits the site before each test
  beforeEach(() => {
    cy.visit('https://khumbolawo.github.io/odin-etch-a-sketch/')
  })
  
  it('successly loads from github pages', () => {
    // check that app initializes correctly
    cy.get('h1')
      .contains('Etch-a-Sketch')
      .should('be.visible')
    cy.get('p')
      .contains('Pick a grid size to get started. Default is 16 x 16 grid size.')
      .should('be.visible')
    cy.get('button')
      .contains('Grid Size')
      .should('be.visible')
  })

  it('should initialize with a 16*16 grid', () =>{
    // check that grid area container loads
    cy.get('#grid-container')
      .should('be.visible')
    
    // check that grid area loads 16x16 grid items / cells
    cy.get('.grid-item').should('have.length',256)    
  })
})