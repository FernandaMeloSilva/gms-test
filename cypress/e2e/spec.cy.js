/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080')
    cy.get('#signup-firstname').type('Fernanda')
    cy.get('#signup-lastname').type('Silva')
    cy.get('#signup-email').type('fernanda@teste.com')
    cy.get('#signup-phone').type('37999010203')
    cy.get('#signup-password').type('Teste123@4')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})