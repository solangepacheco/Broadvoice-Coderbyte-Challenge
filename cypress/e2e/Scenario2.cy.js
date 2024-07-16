describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.leyaonline.com/pt/')
    cy.get('#searchbar-large').type('1984')
    cy.get(':nth-child(1) > .single-search-book-img > .search-item > .img-fluid').click()
    cy.contains('.author > .container','George Orwell')
    cy.contains('._sinpose-address > ul > :nth-child(1)','9789722071550')
    cy.contains('._sinpose-address > ul > :nth-child(6)','344')
    cy.contains('._sinpose-address > ul > :nth-child(5)','235 x 157 x 23 mm')
  })
})