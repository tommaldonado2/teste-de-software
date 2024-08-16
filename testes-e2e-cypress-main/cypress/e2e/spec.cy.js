describe('Pagina inicial', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h1 com o texto correto!', () => {
    cy.getByData("principal").find("h1").should("contain", "Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!")
    cy.getByData('titulo-sub').contains('Vantagens do nosso banco:')
  })
  // it('Deve renderizar h2 com o texto correto!', () => {
  //   cy.getByData('texto01').contains('Conta e cartão gratuitos')
  // })
  // it('Deve renderizar h3 com o texto correto!', () => {
  //   cy.getByData('texto01').contains('Conta e cartão gratuitos')
  //   cy.getByData('texto02').contains('Saques sem custo')
  //   cy.getByData('texto03').contains('Programa de pontos')
  //   cy.getByData('texto04').contains('Seguro Dispositivos')
  // })
  // it('Deve renderizar p com o texto correto!', () => {
  //   cy.getByData('texto01').contains('Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
  //   cy.getByData('texto02').contains('Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.')
  //   cy.getByData('texto03').contains('Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!')
  //   cy.getByData('texto04').contains('Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.')
  // })
  // it('Deve renderizar img com o texto correto!', () => {
  //   cy.getByData('imagem01').should('be.visible')
  //   cy.getByData('imagem02').should('be.visible')
  //   cy.getByData('imagem03').should('be.visible')
  //   cy.getByData('imagem04').should('be.visible')
  //   cy.getByData('imagem05').should('be.visible')
  //   cy.getByData('imagem05').should('be.visible')
  // })
})