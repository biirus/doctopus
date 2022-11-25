import ListDetail from '../../components/ListDetail'

describe('ComponentName.cy.ts', () => {
  it('playground', () => {
    cy.mount(<ListDetail item={{ name: 'test', id: '123a' }} />)
    cy.get('[data-cy=headline]').should('have.text', 'Detail for test')
    cy.get('[data-cy=userId]').should('include.text', '123a')
  })
})

export {}
