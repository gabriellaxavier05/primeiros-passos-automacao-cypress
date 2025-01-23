describe('Orange HRM Testes', () => {
  it('Login com sucesso', () => { // Nome do teste
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // Passando a URL
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') // Preenche o campo 'Username' com o valor 'Admin'
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123') // Preenche o campo 'Password' com o valor 'admin123'
    cy.get('.oxd-button').click() // Clica no botão 'Login'
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') // Verifica se a URL é igual ao que foi passado
    // Outra forma de verificar a página correta
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard') // Verifica se o texto 'Dashboard' está no título da página
  })
})