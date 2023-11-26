import React from 'react'
import Cartoes from './index'

describe('<Cartoes />', () => {
  context('Physical card', () => {
    beforeEach(() => {
      cy.mount(<Cartoes />)
    })

    it('Validate alt', () => {
      cy.get("[data-test='imagem-cartao']").should('have.attr', 'alt', 'Cartão físico')
    })

    it('Validate setup button', () => {
      const onClickSpy = cy.spy().as('onClickSpy')

      cy.mount(<Cartoes onClick={onClickSpy} />)
      cy.get("[data-test='setup-button']").click()
      cy.get('@onClickSpy').should('have.been.calledWith')
    })

    it('Validate block button', () => {
      const onClickSpy = cy.spy().as('onClickSpy')

      cy.mount(<Cartoes onClick={onClickSpy} />)
      cy.get("[data-test='block-button']").click()
      cy.get('@onClickSpy').should('have.been.calledWith')
    })
  })
})