import { login, logout } from '../helpers/index.js'

describe('navigate :: workspace > create_new > file', function () {
    before(function () {
        login(cy)
    })
    after(function() {
        logout (cy)
    })
    it ('dashboard > button', function() {
        cy.get('.sidebar__content__navigation__workspace__item__name').should('have.attr', 'title', 'cypress')
        cy.get('.rah-static--height-auto').should('have.attr', 'aria-hidden', 'false')
        cy.get('.fa-signal').should('be.visible')
        cy.get('.fa-signal').click()
        cy.get('.dashboard__calltoaction .fa-paperclip').should('be.visible')
        cy.get('.dashboard__calltoaction .fa-paperclip').click()
        cy.get('.cardPopup__container').should('be.visible')
        cy.get('.cardPopup__container .cardPopup__header').should('be.visible')
        cy.get('.cardPopup__container .cardPopup__close').should('be.visible')
        cy.get('.cardPopup__container .cardPopup__body').should('be.visible')
        cy.get('.cardPopup__container .createcontent__contentname__title').should('be.visible')
        cy.get('.cardPopup__container .filecontent__form').should('be.visible')
        cy.get('.cardPopup__container .createcontent__form__button').should('be.visible')
        cy.get('.cardPopup__container .cardPopup__close').click()
        cy.get('.cardPopup__container .createcontent__contentname').should('not.be.visible')
    })
    it ('header button', function () {
        cy.get('#dropdownCreateBtn.workspace__header__btnaddcontent__label').should('be.visible')
        cy.get('#dropdownCreateBtn.workspace__header__btnaddcontent__label').click()
        cy.get('.show .subdropdown__link__file__icon').should('be.visible')
        cy.get('.show .subdropdown__link__file__icon').click()
        cy.get('.cardPopup__container').should('be.visible')
        cy.get('.cardPopup__container .cardPopup__header').should('be.visible')
        cy.get('.cardPopup__container .cardPopup__close').should('be.visible')
        cy.get('.cardPopup__container .cardPopup__body').should('be.visible')
        cy.get('.cardPopup__container .createcontent__contentname__title').should('be.visible')
        cy.get('.cardPopup__container .filecontent__form').should('be.visible')
        cy.get('.cardPopup__container .createcontent__form__button').should('be.visible')
        cy.get('.cardPopup__container .cardPopup__close').click()
        cy.get('.cardPopup__container .createcontent__contentname').should('not.be.visible')
    })
    it ('content button', function () {
        cy.get('.workspace__content__button.dropdownCreateBtn .__label').should('be.visible')
        cy.get('.workspace__content__button.dropdownCreateBtn .__label').click()
        cy.get('.show .subdropdown__link__file__icon').should('be.visible')
        cy.get('.show .subdropdown__link__file__icon').click()
        cy.get('.cardPopup__container').should('be.visible')
        cy.get('.cardPopup__container .cardPopup__header').should('be.visible')
        cy.get('.cardPopup__container .cardPopup__close').should('be.visible')
        cy.get('.cardPopup__container .cardPopup__body').should('be.visible')
        cy.get('.cardPopup__container .createcontent__contentname__title').should('be.visible')
        cy.get('.cardPopup__container .filecontent__form').should('be.visible')
        cy.get('.cardPopup__container .createcontent__form__button').should('be.visible')
        cy.get('.cardPopup__container .cardPopup__close').click()
        cy.get('.cardPopup__container .createcontent__contentname').should('not.be.visible')
    })
})
