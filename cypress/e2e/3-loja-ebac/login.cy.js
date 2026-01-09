///<reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Mensagem de erro ao inserir usuário inválido', () => {
        cy.get('[name="username"]').type('amora@uorak.com.br')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste123')
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
    });

    it('Mensagem de erro ao inserir senha inválida', () => {
        cy.get('[name="username"]').type('amora@uorak.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste1')
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail')
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('[name="username"]').type('amora@uorak.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste123')
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-MyAccount-content').should('contain', 'A partir do painel de controle de sua conta')
    })

})