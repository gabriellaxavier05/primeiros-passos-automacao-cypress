// IMPORTAÇÕES
import userData from '../fixtures/userData.json' // Importando o arquivo JSON que contém os dados de usuário para serem usados nos testes
import LoginPage from '../../pages/loginPage.js' // Importando a classe LoginPage
import DashboardPage from '../../pages/dashboardPage.js' // Importando a classe DashboardPage
import MenuPage from '../../pages/menuPage.js' // Importando a classe MenuPage
import MyInfoPage from '../../pages/myInfoPage.js' // Importando a classe MyInfoPage


// INSTANCIAÇÕES
const loginPage = new LoginPage() // Instanciando a classe LoginPage
const dashboardPage = new DashboardPage() // Instanciando a classe DashboardPage
const menuPage = new MenuPage() // Instanciando a classe MenuPage
const myInfoPage = new MyInfoPage() // Instanciando a classe MyInfoPage

describe('Orange HRM Testes', () => {
  // Objetos de seletores criados para serem usados nos testes:
  const listaSeletores = {
    dateCloseButton: ".--close", // Botão de fechar o calendário
    genericCombobox: ".oxd-select-text--arrow",
    opcaoComboboxNationallity: ".oxd-select-dropdown > :nth-child(5)", // Opção de nacionalidade "American"
    opcaoComboboxMaritalStatus: ".oxd-select-dropdown > :nth-child(2)", // Opção de estado civil "Single"
    submitButton: "[type='submit']", // Botão de salvar
  }

  // Teste 1: Login com sucesso
  it('Login com sucesso', () => { // Nome do teste
    loginPage.acessoPaginaLogin() // Acessa a página de login
    loginPage.loginComUsuario(userData.usuarioSucesso.username, userData.usuarioSucesso.password) // Faz o login com usuário e senha válidos
    dashboardPage.checkDashboardPage() // Verifica se está na página do dashboard
    menuPage.acessoMyInfo() // Acessa a página 'My Info'
  })

  // Teste 2: Login com falha
  it('Login com falha', () => { // Nome do teste
    loginPage.acessoPaginaLogin() // Acessa a página de login
    loginPage.loginComUsuario(userData.usuarioFalha.username, userData.usuarioFalha.password) // Faz o login com usuário e senha inválidos
  })

  // Novo cenário de teste para verificar a atualização de informações do usuário feita com sucesso
  it.only('Atualização de informações do usuário com sucesso', () => { // it.only() é usado para rodar apenas este teste
    loginPage.acessoPaginaLogin() // Acessa a página de login
    loginPage.loginComUsuario(userData.usuarioSucesso.username, userData.usuarioSucesso.password) // Faz o login com usuário e senha válidos
    dashboardPage.checkDashboardPage() // Verifica se está na página do dashboard
    menuPage.acessoMyInfo() // Acessa a página 'My Info'
    myInfoPage.preenchimentoPersonalDetails('Nome Teste', 'Sobrenome Teste', 'EmployeeT', '13579', '123456789', '2025-04-29') // Preenche os detalhes pessoais com informações passadas por aqui

    cy.get(listaSeletores.dateCloseButton).click() // Clica no botão de fechar o calendário
    cy.get(listaSeletores.genericCombobox).eq(0).click() // Clica no combobox "Nationality"
    cy.get(listaSeletores.opcaoComboboxNationallity).click() // Seleciona a nacionalidade "American" 
    cy.get(listaSeletores.genericCombobox).eq(1).click() // Clica no combobox "Marital Status"
    cy.get(listaSeletores.opcaoComboboxMaritalStatus).click() // Seleciona o estado civil "Single"
    cy.get(listaSeletores.submitButton).eq(0).click() // Clica no botão de salvar
    cy.get('body').should('contain', 'Successfully Updated') // Verifica se a mensagem de sucesso aparece na tela
  })
})