describe('Orange HRM Testes', () => {
  // Teste 1: Login com sucesso
  it('Login com sucesso', () => { // Nome do teste
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // Passando a URL
    cy.get("[name='username']").type('Admin') // Preenche o campo 'Username' com o valor 'Admin'
    cy.get("[name='password']").type('admin123') // Preenche o campo 'Password' com o valor 'admin123'
    cy.get("[type='submit']").click() // Clica no botão 'Login'
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') // Verifica se a URL é igual ao que foi passado
    // Outra forma de verificar a página correta
    cy.get(".oxd-topbar-header-breadcrumb-module").contains('Dashboard') // Verifica se o texto 'Dashboard' está no título da página
  })

  // Teste 2: Login com falha
  it('Login com falha', () => { // Nome do teste
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // Passando a URL
    cy.get("[name='username']").type('Teste') // Preenche o campo 'Username' com o usuário inválido
    cy.get("[name='password']").type('teste') // Preenche o campo 'Password' com a senha inválida
    cy.get("[type='submit']").click() // Clica no botão 'Login'
    cy.get("[role='alert']") // Verifica se o alerta de erro apareceu  
  })
})