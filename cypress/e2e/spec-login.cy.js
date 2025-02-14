describe('Orange HRM Testes', () => {

  // Objetos de seletores criados para serem usados nos testes:
  const listaSeletores = {
    usernameField: "[name='username']", // campo de usuário
    passwordField: "[name='password']", // campo de senha
    loginButton: "[type='submit']", // botão de login
    secaoTituloTopBar: ".oxd-topbar-header-breadcrumb-module", // Título da página
    dashboardGrid: ".orangehrm-dashboard-grid", // Grid do dashboard para verificar se a localização da página está correta
    credencialErradaAlerta: "[role='alert']" // Alerta de credenciais inválidas
  }

  // Dados para serem usados nos objetos:
  const dadosUsuario = {
    usuarioSucesso: {
      username: 'Admin',
      password: 'admin123'
    },
    usuarioFalha: {
      username: 'Teste',
      password: 'teste'
    }
  }
  

  // Teste 1: Login com sucesso
  it('Login com sucesso', () => { // Nome do teste
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // Passando a URL
    cy.get(listaSeletores.usernameField).type(dadosUsuario.usuarioSucesso.username) // Preenche o campo de usuário com o valor 'Admin' usando os dados da const 'dadosUsuario' ('usuarioSucesso'/'username')
    cy.get(listaSeletores.passwordField).type(dadosUsuario.usuarioSucesso.password) // Preenche o campo de senha usando os dados da const 'dadosUsuario' ('usuarioSucesso'/'password')
    cy.get(listaSeletores.loginButton).click() // Clica no botão 'Login'
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') // Verifica se a URL é igual ao que foi passado
    // Outra forma de verificar a página correta
    cy.get(listaSeletores.dashboardGrid) // Verifica se o grid do dashboard está presente
  })

  // Teste 2: Login com falha
  it('Login com falha', () => { // Nome do teste
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // Passando a URL
    cy.get(listaSeletores.usernameField).type(dadosUsuario.usuarioFalha.username) // Preenche o campo de usuário com o usuário inválido usando os dados da const 'dadosUsuario' ('usuarioFalha'/'username')
    cy.get(listaSeletores.passwordField).type(dadosUsuario.usuarioFalha.password) // Preenche o campo de senha com a senha inválida usando os dados da const 'dadosUsuario' ('usuarioFalha'/'password')
    cy.get(listaSeletores.loginButton).click() // Clica no botão 'Login'
    cy.get(listaSeletores.credencialErradaAlerta) // Verifica se o alerta de erro apareceu  
  })
})