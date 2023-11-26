import React from 'react'
import Cabecalho from './index'

describe('<Cabecalho />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Cabecalho />)
  })
})