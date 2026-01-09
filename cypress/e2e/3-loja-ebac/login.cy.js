///<reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
         cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('[name="username"]').type('amora@uorak.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste123')
        cy.get('[name="login"]').click()
    });

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('[name="username"]').type('amora@uorak.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste123')
        cy.get('[name="login"]').click()
       cy.get('.woocommerce-MyAccount-content').should('contain', 'A partir do painel de controle de sua conta')
    })
    
})