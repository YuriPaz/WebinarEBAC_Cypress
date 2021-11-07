/// <reference types="Cypress"/>
describe('Exercicio de entrada e saída de dados', () => {
  beforeEach('', () => {
    cy.visit('https://devfinances.tk/#/');
  });

  it.only('Teste de Entrada de Dados', () => {
    cy.get('.add-button-fixed').click();

    cy.contains('a', 'Crédito').click();

    cy.get('#description').type('Salário');

    cy.get('#amount').clear().type('5000');

    cy.contains('button', 'Salvar').click();
  });

  it('Teste de exclusão de dados', () => {});
});
