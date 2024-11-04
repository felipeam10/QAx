/// <reference types="cypress" />

describe('tarefas', () => {
  
    it('deve cadastrar uma nova tarefa', () => {
        
        const taskName = 'Tarefa de teste'
        
        cy.deleteTaskByName(taskName)
        
        cy.createTask(taskName)

        cy.contains('main div p', taskName)
            .should('be.visible')
    })

    it('nao deve permitir uma tarefa duplicada', () => {
        
        const taskName1 = {
            name: 'Learn SpringBoot with Java',
            is_done: false
        }
        
        cy.deleteTaskByName(taskName1.name)

        cy.postTask(taskName1)    
        
        cy.createTask(taskName1.name)

        cy.get('.swal2-html-container')
            .should('be.visible')
            .should('have.text', 'Task already exists!')
    })

    it('campo obrigatório', () => {
        cy.createTask()
        cy.isRequired('This is a required field')
        
    })
    
})