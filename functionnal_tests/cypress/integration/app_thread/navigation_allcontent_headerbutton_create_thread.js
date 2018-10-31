describe('navigate :: workspace > create_new > thread', function () {
  before(() => {
    cy.resetDB()
    cy.setupBaseDB()
  })

  beforeEach(function () {
    cy.login('users')
  })
  it('dashboard > button', function () {
    cy.visit('/workspaces/1/contents')
    cy.get('.pageTitleGeneric__title__icon').should('be.visible')
    cy.get('#dropdownCreateBtn.workspace__header__btnaddcontent__label').should('be.visible')
    cy.get('#dropdownCreateBtn.workspace__header__btnaddcontent__label').click()
    cy.get('.show .subdropdown__link__thread__icon').should('be.visible')
    cy.get('.show .subdropdown__link__thread__icon').click()
    var titre1 = 'thread1'
    cy.get('.cardPopup__container').should('be.visible')
    cy.get('.cardPopup__header').should('be.visible')
    cy.get('.cardPopup__close').should('be.visible')
    cy.get('.cardPopup__body').should('be.visible')
    cy.get('.cardPopup__container .createcontent .createcontent__contentname').should('be.visible')
    cy.get('.cardPopup__container .createcontent .createcontent__form__input').should('have.attr', 'placeholder')
    cy.get('.cardPopup__container .createcontent .createcontent__form__input').type(titre1)
    cy.get('.cardPopup__container .createcontent .createcontent__form__input').should('have.attr', 'value', titre1)
    cy.get('.cardPopup__container .cardPopup__close').click()
    cy.get('.cardPopup__container .createcontent .createcontent__contentname').should('not.be.visible')
  })
})
