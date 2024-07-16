describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.leyaonline.com/pt/')
    cy.get('.destaca > .container > .row > .col-md-4').click()
    cy.get('.show-more-button').click()
    cy.contains('.decasta-content','JOÃO PINTO COELHO')
  })
})