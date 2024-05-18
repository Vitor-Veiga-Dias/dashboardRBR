# Documentação do Projeto

## Visão Geral
Este projeto é uma aplicação React que permite aos usuários gerenciar informações de funcionários. Ele fornece funcionalidades para adicionar, editar e excluir funcionários, além de visualizar uma lista de todos os funcionários.

### Instalação
Para instalar as dependências do projeto, execute o seguinte comando na raiz do projeto:

``yarn ou npm i``

### Execução
Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

``yarn dev ou npm run dev``

A aplicação estará disponível em http://localhost:3000.

### Estrutura do Projeto
O projeto segue a estrutura padrão de um projeto React criado com create-react-app. Aqui estão os principais diretórios e arquivos:

src/: Este diretório contém todo o código fonte do projeto.
components/: Este diretório contém todos os componentes React usados no projeto.
pages/: Este diretório contém as páginas da aplicação.
App.tsx: Este é o componente raiz da aplicação.
index.tsx: Este é o ponto de entrada da aplicação.
Componentes Principais
Dashboard: Este componente exibe uma lista de todos os funcionários e fornece botões para adicionar, editar e excluir funcionários.
AddEmployee: Este componente fornece um formulário para adicionar um novo funcionário.
EditEmployee: Este componente fornece um formulário para editar um funcionário existente.

### Dependências
react: Biblioteca para construir a interface do usuário.
@chakra-ui/react: Biblioteca de componentes de UI para React.
react-hook-form: Biblioteca para gerenciar o estado do formulário e a validação.
react-table: Biblioteca para criar tabelas flexíveis e altamente personalizáveis.