import React from 'react'
import BurguerIcon from './index'

describe('<BurguerIcon />', () => {
  it('renders', () => {
    cy.mount(<BurguerIcon />)

    cy.get("[data-test='menu-burguer']").should('be.visible')
    cy.get("[data-test='Menu-burguer']").should('not.exist')
  })
})