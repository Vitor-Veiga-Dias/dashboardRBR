# Documentação do Projeto

## Frontend

### Tecnologias Utilizadas

- **React com Next.js**: Utilizado como o framework do front-end para construir a interface do usuário.
- **Chakra UI**: Utilizado para estilização e componentes de UI.
- **TypeScript**: Utilizado para garantir a segurança dos tipos.

### Funcionalidades

### Página Inicial do Dashboard

- Exibe uma tabela de funcionários com colunas para nome, cargo, departamento e ações (editar/excluir).
- Inclui um botão para adicionar um novo funcionário.
- Implementa funcionalidade de ordenação e busca na lista de funcionários.

### Página de Adicionar Funcionário

- Contém um formulário para adicionar um novo funcionário com campos para nome, cargo, departamento e data de admissão.
- Valida os campos do formulário antes de enviar.

### Página de Editar Funcionário

- Contém um formulário para editar os detalhes de um funcionário existente.
- Preenche o formulário com os detalhes atuais do funcionário.
- Valida os campos do formulário antes de enviar.

## Backend

### Tecnologias Utilizadas

- **Node.js com Express.js**: Utilizado para criar o servidor back-end.
- **Docker**: Utilizado para criar uma imagem do mongo db.
- **MongoDB (Mongoose)**: Utilizado como banco de dados.

### API do Backend

[Link do postman](https://www.postman.com/soulss/workspace/dashborad-rbr-digital/collection/13651200-a6dc24c0-aad8-484b-81c3-ddc036be703b?action=share&creator=13651200)

Implementa endpoints RESTful para operações CRUD:

- **GET /api/employees**: Recupera todos os funcionários.
- **GET /api/employees/:id**: Recupera um único funcionário pelo ID.
- **POST /api/employees**: Cria um novo funcionário.
- **PUT /api/employees/:id**: Atualiza um funcionário pelo ID.
- **DELETE /api/employees/:id**: Exclui um funcionário pelo ID.

### Endpoints de Usuários

- **GET /users**: Recupera todos os usuários.
- **GET /users/:id**: Recupera um único usuário pelo ID.
- **POST /users/sign-in**: Realiza o login do usuário.

## Como Executar o Projeto Localmente

Clone o projeto: 

### Backend:

1. navegue até a pasta da api `cd /dashboardRBR-api`
2. Instale as dependências com `npm install`.
3. Use o compando `docker compose up` para rodar o container com mongo db.
4. Inicie o servidor de desenvolvimento com `npm run start:dev`.
5. Acesse [http://localhost:7100](http://localhost:7100) no seu navegador para ver o aplicativo.

### Frontend:

1. navegue até a pasta da api `cd dashboard-frontend`
2. Instale as dependências com `npm install`.
3. Inicie o servidor de desenvolvimento com `npm run dev`.
4. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador para ver o aplicativo.
