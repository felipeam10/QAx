/// <reference types="cypress" />

describe('tarefas', () => {
    
    it('deve cadastrar uma nova tarefa', () => {
        cy.request({
            url: 'http://localhost:3333/helper/tasks',
            method: 'DELETE',
            body: {
                name: 'Tarefa de teste'
            }
        }).then(response => {
            expect(response.status).to.eq(204)
        })
        
        cy.visit('http://localhost:3000')
    
        cy.get('input[placeholder="Add a new Task"]')
        .type('Tarefa de teste')    

        cy.contains('button', 'Create').click()

        cy.contains('main div p', 'Tarefa de teste')
            .should('be.visible')
    })

    it('nao deve permitir uma tarefa duplicada', () => {
        cy.request({
            url: 'http://localhost:3333/helper/tasks',
            method: 'DELETE',
            body: {
                name: 'Learn SpringBoot with Java'
            }
        }).then(response => {
            expect(response.status).to.eq(204)
        })


        //Dado que eu tenha uma tarefa duplicada
        cy.request({
            url: 'http://localhost:3333/tasks',
            method: 'POST',
            body: {
                name: 'Learn SpringBoot with Java',
                is_done: false
            }
        }).then(response => {
            expect(response.status).to.eq(201)
        })
        
        
        //Quando faço o cadastro dessa tarefa
        cy.visit('http://localhost:3000')
        cy.get('input[placeholder="Add a new Task"]')
            .type('Learn SpringBoot with Java')    
        cy.contains('button', 'Create').click()

        //Então devo ver uma mensagem de duplicidade
        cy.get('.swal2-html-container')
            .should('be.visible')
            .should('have.text', 'Task already exists!')
    })
    
})