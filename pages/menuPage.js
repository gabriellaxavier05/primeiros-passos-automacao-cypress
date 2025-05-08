class MenuPage {
    listaSeletores() {
        const seletores = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']", // Seletor do botão 'My Info'
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']", // Seletor do botão 'Performance'
        }

        return seletores; // Retorna o objeto de seletores
    }

    acessoMyInfo() { // Função para acessar a página 'My Info'
        cy.get(this.listaSeletores().myInfoButton).click() // Clica na opção 'My Info' do menu
    }
    
    acessoPerformance() { // Função para acessar a página 'Performance'
        cy.get(this.listaSeletores().performanceButton).click() // Clica na opção 'Performance' do menu
    }
}

export default MenuPage; // Exporta a classe MenuPage para ser usada em outros arquivos