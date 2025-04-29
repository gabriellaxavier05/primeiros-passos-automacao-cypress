// Importando o arquivo JSON que contém os dados de usuário para serem usados nos testes:
import userData from '../fixtures/userData.json'

describe('Orange HRM Testes', () => {

  // Objetos de seletores criados para serem usados nos testes:
  const listaSeletores = {
    usernameField: "[name='username']", // campo de usuário
    passwordField: "[name='password']", // campo de senha
    loginButton: "[type='submit']", // botão de login
    secaoTituloTopBar: ".oxd-topbar-header-breadcrumb-module", // Título da página
    dashboardGrid: ".orangehrm-dashboard-grid", // Grid do dashboard para verificar se a localização da página está correta
    credencialErradaAlerta: "[role='alert']", // Alerta de credenciais inválidas
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']", // Seletor do botão 'My Info'
    firstNameField: "[name='firstName']", // Campo de nome
    lastNameField: "[name='lastName']", // Campo de sobrenome
  }

  // Teste 1: Login com sucesso
  it('Login com sucesso', () => { // Nome do teste
    cy.visit('/auth/login') // Passando a URL; URL básica definida no arquivo cypress.config.js
    cy.get(listaSeletores.usernameField).type(userData.usuarioSucesso.username) // Preenche o campo de usuário com o valor 'Admin' usando os dados de 'usuarioSucesso'/'username' do arquivo userData.json
    cy.get(listaSeletores.passwordField).type(userData.usuarioSucesso.password) // Preenche o campo de senha usando os dados de 'usuarioSucesso'/'password' do arquivo userData.json
    cy.get(listaSeletores.loginButton).click() // Clica no botão 'Login'
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') // Verifica se a URL é igual ao que foi passado
    // Outra forma de verificar a página correta
    cy.get(listaSeletores.dashboardGrid) // Verifica se o grid do dashboard está presente
  })

  // Teste 2: Login com falha
  it('Login com falha', () => { // Nome do teste
    cy.visit('/auth/login') // Passando a URL; URL básica definida no arquivo cypress.config.js
    cy.get(listaSeletores.usernameField).type(userData.usuarioFalha.username) // Preenche o campo de usuário com o usuário inválido usando os dados de 'usuarioFalha'/'username' do arquivo userData.json
    cy.get(listaSeletores.passwordField).type(userData.usuarioFalha.password) // Preenche o campo de senha com a senha inválida usando os dados de 'usuarioFalha'/'password' do arquivo userData.json
    cy.get(listaSeletores.loginButton).click() // Clica no botão 'Login'
    cy.get(listaSeletores.credencialErradaAlerta) // Verifica se o alerta de erro apareceu  
  })

  // Novo cenário de teste para verificar a atualização de informações do usuário feita com sucesso
  it.only('Atualização de informações do usuário com sucesso', () => { // it.only() é usado para rodar apenas este teste
    cy.visit('/auth/login') // Passando a URL; URL básica definida no arquivo cypress.config.js
    cy.get(listaSeletores.usernameField).type(userData.usuarioSucesso.username) // Preenche o campo de usuário com o valor 'Admin' usando os dados de 'usuarioSucesso'/'username' do arquivo userData.json
    cy.get(listaSeletores.passwordField).type(userData.usuarioSucesso.password) // Preenche o campo de senha usando os dados de 'usuarioSucesso'/'password' do arquivo userData.json
    cy.get(listaSeletores.loginButton).click() // Clica no botão 'Login'
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') // Verifica se a URL é igual ao que foi passado
    // Outra forma de verificar a página correta
    cy.get(listaSeletores.dashboardGrid) // Verifica se o grid do dashboard está presente
    cy.get(listaSeletores.myInfoButton).click() // Clica no link 'My Info'
    cy.get(listaSeletores.firstNameField).clear().type('Nome Teste') // Limpa o campo de nome e preenche com o valor 'Nome Teste'
    cy.get(listaSeletores.lastNameField).clear().type('Sobrenome Teste') // Limpa o campo de sobrenome e preenche com o valor 'Sobrenome Teste'
  })
})