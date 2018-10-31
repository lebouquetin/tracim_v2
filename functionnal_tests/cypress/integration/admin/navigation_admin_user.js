describe('navigation :: admin > user', function () {
  before(() => {
    cy.resetDB()
    cy.setupBaseDB()
  })

  beforeEach(function () {
    cy.login('administrators')
    cy.visit('/')
  })
  it('', function () {
    cy.get('.adminlink.dropdown').should('be.visible').click()
    cy.get('[href="/admin/user"]').should('be.visible').click()
    cy.url().should('include', '/admin/user')
    cy.get('.adminUser__description').should('be.visible')
  })
})
