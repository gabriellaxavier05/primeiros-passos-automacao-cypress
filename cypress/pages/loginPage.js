class LoginPage {
  listaSeletores() {
    // objetos em forma de função
    const seletores = {
      // seletores
      usernameField: "[name='username']", // campo de usuário
      passwordField: "[name='password']", // campo de senha
      loginButton: "[type='submit']", // botão de login
      secaoTituloTopBar: ".oxd-topbar-header-breadcrumb-module", // Título da página
      credencialErradaAlerta: "[role='alert']", // Alerta de credenciais inválidas
    };

    return seletores; // Retorna o objeto de seletores
  }

  // Criação dos passos do teste
  acessoPaginaLogin(){ // função para acessar a página de login
    cy.visit('/auth/login') // Passando a URL; URL básica definida no arquivo cypress.config.js
  }

  loginComUsuario(username, password){ // função que faz o login com usuário e senha; função genérica que pode ter dados especificados em cada teste
    cy.get(this.listaSeletores().usernameField).type(username) // this é uma autoreferência para a própria classe; chama a função 'listaSeletores', chama o objeto 'usernameField' e preenche o campo de usuário
    cy.get(this.listaSeletores().passwordField).type(password) // O conceito é o mesmo para o campo de senha; preenche o campo de senha
    cy.get(this.listaSeletores().loginButton).click() // Clica no botão 'Login'
    cy.get(this.listaSeletores().credencialErradaAlerta).should('not.exist') // Verifica se o alerta de erro não existe; se não existir, o login foi bem sucedido
  }
}

export default LoginPage; // Exporta a classe LoginPage para ser usada em outros arquivos