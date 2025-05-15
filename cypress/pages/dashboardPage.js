class DashboardPage {
    listaSeletores() {
        // objetos em forma de função
        const seletores = {
            dashboardGrid: ".orangehrm-dashboard-grid", // Grid do dashboard para verificar se a localização da página está correta
        }

        return seletores; // Retorna o objeto de seletores
    }

    checkDashboardPage() { // Função para verificar se estamos na página do dashboard
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index') // Verifica se a URL é igual ao que foi passado
        cy.get(this.listaSeletores().dashboardGrid).should('be.visible') // Verifica se o grid do dashboard está presente
    }

}

export default DashboardPage; // Exporta a classe Dashboard para ser usada em outros arquivos