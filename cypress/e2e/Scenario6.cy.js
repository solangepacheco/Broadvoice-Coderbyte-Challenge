describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.leyaonline.com/pt/')
    cy.get('.menu-toggler-btn').click()
    cy.get('ul > :nth-child(6) > a').click()
    cy.get('.search-filter-btn > [data-bs-toggle="offcanvas"]').click()
    cy.get('#dropdownOrderButton').click()
    cy.get(':nth-child(3) > .dropdown-item').click()
  })
})