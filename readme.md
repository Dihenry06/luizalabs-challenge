# LuizaLabs Challenge

Aplicação desenvolvida utilizando Nodejs e com banco de dados noSQL MongoDB.

## Pré-requisitos

- Docker
- Docker-compose

## Decisões de Técnicas

Decisões técnicas exclarecidas:

- Optei por não utilizar senha no banco de dados em modo dev.
- O projeto e suas dependências estão com docker, permitindo uma fácil execução em qualquer ambiente.
- A aplicação não disponibiliza consulta da api de produtos, entendo que em uma arquitetura essa responsabilidade fica para a aplicação que utilizara as duas API( produtos e produtos favoritos) utilizando por exemplo um serviço como API Gateway.
- Optei por utilizar JS para desenvolver a api, pelo tempo limitado TS não seria o mais adequado.
- O diretorio 'data' é criado a partir do docker para salvar o estado do banco de dados para uma proxima execução.
- Por ser tratar de uma aplicação onde não se encontra em produção não utilizei o GIT FLOW.

## Como rodar

### 1. iniciar aplicação

Para iniciar a aplicação NodeJS, executar os seguintes comandos:

```
docker-compose build
docker-compose up -d
```

A aplicação estará disponível na rota http://localhost:8080/api

### 2. Utilização da API

Para iniciar o uso gerar um token de acesso para utilização da api.
A rota responsavel por isso é [/auth/registration] Na response dessa requisição receberá um Token, que deverá ser utilizado no header authorization de todas as requisições.

### Documentação

https://documenter.getpostman.com/view/12136578/UVyq1cu6https://documenter.getpostman.com/view/12136578/UVyq1cu6

```

## Sobre

Desenvolvido por [Diogo Henrique](https://github.com/dihenry06).
```
