describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.leyaonline.com/pt/')
    cy.get('#darkmode > a > .nav-icon').click()
    cy.get('#darkmode > a > .nav-icon').should('have.class', 'icon-moon')
  })
})