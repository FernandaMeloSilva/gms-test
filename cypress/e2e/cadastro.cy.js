/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(()=>{
    cy.visit('/')
  });

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `fernanda${Date.now()}@teste.com`
    cy.preencherCadastro('Fernanda', 'Santos', email, '37999010203', 'Teste@12345')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it.only('Deve validar mensagem de erro com o campo nome inválido', ()=>{
    cy.preencherCadastro('Fernand4', 'Santos', 'email@teste.com', '37999010203', 'Teste@12345')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos')
  });
})