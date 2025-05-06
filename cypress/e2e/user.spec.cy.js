// Importando o arquivo JSON que contém os dados de usuário para serem usados nos testes:
import LoginPage from '../../pages/loginPage.js'
import userData from '../fixtures/userData.json'

const loginPage = new LoginPage() // Instanciando a classe LoginPage

describe('Orange HRM Testes', () => {
  // Objetos de seletores criados para serem usados nos testes:
  const listaSeletores = {
    dashboardGrid: ".orangehrm-dashboard-grid", // Grid do dashboard para verificar se a localização da página está correta
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']", // Seletor do botão 'My Info'
    firstNameField: "[name='firstName']", // Campo de nome
    lastNameField: "[name='lastName']", // Campo de sobrenome
    genericField: ".oxd-input--active", // Campo genérico para ser usado em outros testes
    dateField: "[placeholder='mm-dd-yyyy']", // Campo de data
    dateCloseButton: ".--close", // Botão de fechar o calendário
    genericCombobox: ".oxd-select-text--arrow",
    opcaoComboboxNationallity: ".oxd-select-dropdown > :nth-child(5)", // Opção de nacionalidade "American"
    opcaoComboboxMaritalStatus: ".oxd-select-dropdown > :nth-child(2)", // Opção de estado civil "Single"
    submitButton: "[type='submit']", // Botão de salvar
  }

  // Teste 1: Login com sucesso
  it.only('Login com sucesso', () => { // Nome do teste
    loginPage.acessoPaginaLogin() // Acessa a página de login
    loginPage.loginComUsuario(userData.usuarioSucesso.username, userData.usuarioSucesso.password) // Faz o login com usuário e senha válidos
    /*
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') // Verifica se a URL é igual ao que foi passado
    // Outra forma de verificar a página correta
    cy.get(listaSeletores.dashboardGrid) // Verifica se o grid do dashboard está presente 
    */
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
  it('Atualização de informações do usuário com sucesso', () => { // it.only() é usado para rodar apenas este teste
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
    //cy.get(listaSeletores.genericField).eq(3).clear().type('NickName Teste') // Preenche o campo "Nick Name" com o valor 'NickName Teste'
    cy.get(listaSeletores.genericField).eq(3).clear().type('EmployeeT') // Preenche o campo "Employee Id" com o valor 'EmployeeT'
    cy.get(listaSeletores.genericField).eq(5).clear().type('13579') // Preenche o campo "Other Id" com o valor '135794
    cy.get(listaSeletores.genericField).eq(5).clear().type('123456789') // Preenche o campo "Driver's License Number" com o valor '123456789'
    cy.get(listaSeletores.genericField).eq(6).clear().type('2025-04-29') // Preenche o campo "License Expiry Date" com o valor '2025-04-29'
    cy.get(listaSeletores.dateCloseButton).click() // Clica no botão de fechar o calendário
    cy.get(listaSeletores.genericCombobox).eq(0).click() // Clica no combobox "Nationality"
    cy.get(listaSeletores.opcaoComboboxNationallity).click() // Seleciona a nacionalidade "American" 
    cy.get(listaSeletores.genericCombobox).eq(1).click() // Clica no combobox "Marital Status"
    cy.get(listaSeletores.opcaoComboboxMaritalStatus).click() // Seleciona o estado civil "Single"
    cy.get(listaSeletores.submitButton).eq(0).click() // Clica no botão de salvar
    cy.get('body').should('contain', 'Successfully Updated') // Verifica se a mensagem de sucesso aparece na tela
  })
})