# Automação de testes com Cypress - OrangeHRM 🍊

Esse projeto utiliza a ferramenta de automação de testes front-end Cypress para validar funcionalidades de login e de atualização de informações de usuário.

<br>

## ❗ Pré-requisitos
- Node.js instalado
- npm
- Chrome instalado

<br>

## ⬇️ Instalação
1. Clone o repositório:
    ```bash
    git clone https://github.com/gabriellaxavier05/primeiros-passos-automacao-cypress
2. Instale as dependências:
    ```bash
    npm install
3. Execute os testes:
    - Com interface:
        ```bash
        npx cypress open
    - Sem interface (pelo terminal):
        ```bash
        npx cypress run

<br>

## 🪜 Estrutura das pastas
📂 primeiros-passos-cypress/  
├─ 📂 cypress/  
│  ├─ 📂 e2e/     # testes; arquivos specs  
│  ├─ 📂 fixtures/        # dados de teste  
│  ├─ 📂 pages/        # pages objects   
│  ├─ 📂 support/         # comandos customizados  
├─ package.json  
└─ README.md  