/// <reference types="cypress" />

describe('tarefas', () => {
  
    context('cadastro', () => {
          
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
    
    context('atualizacao', () => {
        
        it('deve concluir uma tarefa', () => {
            
            const task = {
                name: 'Marcar Tarefa de teste como concluída',
                is_done: false
            }
            
            cy.deleteTaskByName(task.name)
            cy.postTask(task)

            cy.visit('http://localhost:3000')
            
            cy.contains('p', task.name)
                .parent()
                .find('button[class*=ItemToggle]')
                .click()

            cy.contains('p', task.name)
                .should('have.css', 'text-decoration-line', 'line-through')
        })
    
    })

    context('exclusao', () => {
        
        it('deve remover uma tarefa', () => {
            
            const task = {
                name: 'remover Tarefa de teste',
                is_done: false
            }
            
            cy.deleteTaskByName(task.name)
            cy.postTask(task)

            cy.visit('http://localhost:3000')
            
            cy.contains('p', task.name)
                .parent()
                .find('button[class*=ItemDelete]')
                .click()

            cy.contains('p', task.name)
                .should('not.exist')
        })
    
    })
    
})