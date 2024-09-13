# README - Avaliação Técnica

## Descrição do Desafio

Este projeto é uma aplicação desenvolvida em C# com .NET Core 5 ou superior. O objetivo é implementar uma solução de cadastro de clientes, obedecendo aos princípios do DDD (Domain Driven Design) e, como diferencial, aplicar o padrão CQRS (Command Query Responsibility Segregation) sem Event Sourcing.

O projeto conta com:

- Back-end utilizando Web API, seguindo o padrão RESTful.
- Front-end implementado como uma Single Page Application (SPA) com **VueJs**, **React** ou **Angular**.
- Não há foco em layout ou boas práticas visuais de HTML/CSS.

## Funcionalidades

A aplicação permite realizar o CRUD (Create, Read, Update, Delete) de clientes, com as seguintes informações:

- **ID** (identificador único)
- **Nome da Empresa**
- **Porte da Empresa** (pequena, média ou grande)

### Telas disponíveis:

1. **Listagem de Clientes**: exibe todos os clientes cadastrados.
2. **Cadastro e Edição de Clientes**: permite incluir um novo cliente ou editar um já existente.
3. **Remoção de Cliente**: disponibiliza a opção de excluir um cliente cadastrado.

## Requisitos

### Camada de Apresentação:
- Desenvolver uma API RESTful com C# e .NET Core 5 ou superior.
- Front-end deve ser uma Single Page Application (SPA) usando **VueJs**, **React** ou **Angular**.

### Camada de Domínio:
- Seguir os princípios do DDD (Domain Driven Design) para separar as responsabilidades em camadas de **Presentation**, **Application** e **Domain**.
- Aplicar o padrão **CQRS** para separar comandos de consultas, sem utilizar Event Sourcing.

### Acesso a Dados:
- Utilizar um banco de dados relacional como **Microsoft® SQL Server**, **PostgreSQL** ou **MySQL**.
- Framework ORM: **Entity Framework** ou **NHibernate**.
- Diferencial: Projeção de dados com banco **NoSQL** (MongoDB, DynamoDB ou Cassandra) na parte de consulta (CQRS).

## Como Rodar o Projeto

### Requisitos:
- .NET Core 5 ou superior
- Node.js para rodar o front-end (se aplicável)
- SQL Server, PostgreSQL ou MySQL para o banco de dados relacional
- (Opcional) MongoDB para a projeção de dados NoSQL

### Passos:

1. **Clonar o Repositório**
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. **Configurar o Banco de Dados Relacional**
   - Configure a string de conexão no arquivo `appsettings.json`.

3. **Rodar as Migrações do Banco de Dados**
   ```bash
   dotnet ef database update
   ```

4. **Subir o Back-end**
   ```bash
   dotnet run
   ```

5. **Subir o Front-end**
   Navegue até a pasta do front-end e rode os comandos adequados, dependendo do framework escolhido (VueJs, React ou Angular).

   Exemplo com **VueJs**:
   ```bash
   npm install
   npm run serve
   ```

### Testes

Para rodar os testes unitários:

```bash
dotnet test
```

## Estrutura do Projeto

O projeto está organizado em camadas seguindo os princípios do DDD:

- **Presentation**: contém a interface do usuário e a Web API.
- **Application**: contém a lógica de aplicação e comandos/consultas do CQRS.
- **Domain**: contém as entidades de negócio e regras de domínio.
- **Infrastructure**: contém a configuração de acesso aos dados e implementação de repositórios.

## Tecnologias Utilizadas

- **Back-end**: C#, .NET Core 5, Entity Framework/NHibernate
- **Front-end**: VueJs/React/Angular
- **Banco de Dados Relacional**: Microsoft SQL Server, PostgreSQL ou MySQL
- **NoSQL**: MongoDB, DynamoDB ou Cassandra (diferencial)
- **Padrão Arquitetural**: RESTful, CQRS, DDD

## Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b minha-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona minha feature'`)
4. Faça o push para a branch (`git push origin minha-feature`)
5. Abra um Pull Request

## Contato

Para dúvidas, entre em contato pelo e-mail [seu-email@example.com].