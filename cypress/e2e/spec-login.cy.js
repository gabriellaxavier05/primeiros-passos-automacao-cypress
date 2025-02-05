describe('Orange HRM Testes', () => {

  // Objetos de seletores criados para serem usados nos testes
  const listaSeletores = {
    usernameField: "[name='username']", // campo de usuário
    passwordField: "[name='password']", // campo de senha
    loginButton: "[type='submit']", // botão de login
    secaoTituloTopBar: ".oxd-topbar-header-breadcrumb-module", // Título da página
    credencialErradaAlerta: "[role='alert']" // Alerta de credenciais inválidas
  }

  // Teste 1: Login com sucesso
  it('Login com sucesso', () => { // Nome do teste
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // Passando a URL
    cy.get(listaSeletores.usernameField).type('Admin') // Preenche o campo de usuário com o valor 'Admin'
    cy.get(listaSeletores.passwordField).type('admin123') // Preenche o campo de senha com o valor 'admin123'
    cy.get(listaSeletores.loginButton).click() // Clica no botão 'Login'
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') // Verifica se a URL é igual ao que foi passado
    // Outra forma de verificar a página correta
    cy.get(listaSeletores.secaoTituloTopBar).contains('Dashboard') // Verifica se o texto 'Dashboard' está no título da página
  })

  // Teste 2: Login com falha
  it('Login com falha', () => { // Nome do teste
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // Passando a URL
    cy.get(listaSeletores.usernameField).type('Teste') // Preenche o campo de usuário com o usuário inválido
    cy.get(listaSeletores.passwordField).type('teste') // Preenche o campo de senha com a senha inválida
    cy.get(listaSeletores.loginButton).click() // Clica no botão 'Login'
    cy.get(listaSeletores.credencialErradaAlerta) // Verifica se o alerta de erro apareceu  
  })
})