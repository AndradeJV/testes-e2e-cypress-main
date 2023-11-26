import React from 'react'
import Botao from './index'


describe('Validate <Botao /> component', () => {
  const textButton = 'Já tenho conta'
  const firstButtonCss = 'Botao_btn__primario__7samv'
  const secondButtonCss = 'Botao_btn__secundario__yGu+D'


  context('First button', () => {
    beforeEach(() => {
      const onClickSpy = cy.spy().as('onClickSpy')
  
      cy.mount(<Botao 
        texto={textButton}
        acaoBotao='login'
        onClick={onClickSpy}
        />
      )
    })
  
    it('Should exists in screen', () => {
      cy.get("[data-test='botao-login']").should("exist")
    })

    it('Validate CSS', () => {
      cy.get('button').should('have.class', firstButtonCss)
    })

    it('Validate incorrect argument', () => {
      cy.mount(<Botao 
          tipo='Secundario'
        />
      )

      cy.get('button').should('have.class', firstButtonCss)
      cy.get('button').should('not.have.class', secondButtonCss)
    })

    it('Should contains a correct text', () => {
      cy.get('button').should('contains.text', 'Já tenho conta')
    })

    it('deve disparar o evento de clique quando clicado', () => {
      cy.get("[data-test='botao-login']").click()
      cy.get('@onClickSpy').should('have.been.calledWith')
    });
  })


  context('Second button', () => {
    beforeEach(() => {
      const onClickSpy = cy.spy().as('onClickSpy')
  
      cy.mount(<Botao 
        texto={textButton}
        tipo='secundario'
        acaoBotao='login'
        onClick={onClickSpy}
        />
      )
    }) 


    it('Should exists in screen', () => {
      cy.get("[data-test='botao-login']").should("exist")
    })

    it('Validate CSS', () => {
      cy.get('button').should('have.class', secondButtonCss)
    })

    it('Should contains a correct text', () => {
      cy.get('button').should('contains.text', 'Já tenho conta')
    })

    it('deve disparar o evento de clique quando clicado', () => {
      cy.get("[data-test='botao-login']").click()
      cy.get('@onClickSpy').should('have.been.calledWith')
    });
  })
})