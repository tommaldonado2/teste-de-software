describe('Página inicial', () => {
  // beforeEach( () => {
  //   cy.visit('http://localhost:3000/')
  // })

  it('Deve renderizar h1 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="titulo-principal"]').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })
})