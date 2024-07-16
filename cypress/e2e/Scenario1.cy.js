describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.leyaonline.com/pt/')
    cy.get('#searchbar-large').type('George')
    cy.contains('.search-books-details > .row', 'O Triunfo dos Porcos').should('be.visible')
    cy.get('.search-books-details > .row > :nth-child(8)').click()
    cy.contains('.sinopse > .container','Quinta Manor')
  })
})