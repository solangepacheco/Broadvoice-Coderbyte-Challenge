describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.leyaonline.com/pt/')
    cy.get('#searchbar-large').type('1984')
    cy.get(':nth-child(1) > .single-search-book-img > .search-item > .img-fluid').click()
    cy.contains('.author > .container','George Orwell')
  })
})