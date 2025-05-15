class MyInfoPage {
    listaSeletores() {
        const seletores = {
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

        return seletores; // Retorna o objeto de seletores
    }

    // Criação dos passos do teste
    preenchimentoPersonalDetails(firstName, lastName, employeeId, otherId, driversLicenseNumber, licenseExpiryDate) { // Função para preencher os detalhes pessoais
        cy.get(this.listaSeletores().firstNameField).clear().type(firstName) // Limpa o campo de nome e preenche com o 1o nome
        cy.get(this.listaSeletores().lastNameField).clear().type(lastName) // Limpa o campo de sobrenome e preenche com o sobrenome
        // cy.get(this.listaSeletores().genericField).eq(3).clear().type(nickName) // Preenche o campo "Nick Name"
        cy.get(this.listaSeletores().genericField).eq(3).clear().type(employeeId) // Preenche o campo "Employee Id"
        cy.get(this.listaSeletores().genericField).eq(5).clear().type(otherId) // Preenche o campo "Other Id"
        cy.get(this.listaSeletores().genericField).eq(5).clear().type(driversLicenseNumber) // Preenche o campo "Driver's License Number"
        cy.get(this.listaSeletores().genericField).eq(6).clear().type(licenseExpiryDate) // Preenche o campo "License Expiry Date"
        cy.get(this.listaSeletores().dateCloseButton).click() // Clica no botão de fechar o calendário
        cy.get(this.listaSeletores().genericCombobox).eq(0).click() // Clica no combobox "Nationality"
        cy.get(this.listaSeletores().opcaoComboboxNationallity).click() // Seleciona a nacionalidade "American" 
        cy.get(this.listaSeletores().genericCombobox).eq(1).click() // Clica no combobox "Marital Status"
        cy.get(this.listaSeletores().opcaoComboboxMaritalStatus).click() // Seleciona o estado civil "Single"
    }

    saveForm() { // Função para salvar o formulário
        cy.get(this.listaSeletores().submitButton).eq(0).click({force: true}) // Clica no botão de salvar
        cy.get('body').should('contain', 'Successfully Updated') // Verifica se a mensagem de sucesso aparece na tela
    }
}

export default MyInfoPage; // Exporta a classe MyInfoPage para ser usada em outros arquivos