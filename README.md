# BFF Study Case

Este repositório é um estudo prático de arquitetura **BFF (Backend for Frontend)**, onde temos dois projetos:

- `front-bff` — frontend em **ReactJS** criado com **Vite**
- `back-bff` — backend em **NestJS**

---

## 🧰 Visão geral

O objetivo é simular uma aplicação onde o frontend **não chama múltiplas APIs externas diretamente**, mas sim uma única interface (o BFF), que vai orquestrar as chamadas necessárias para montar a resposta completa.

Nesse caso de exemplo:

- O frontend chama o BFF uma única vez.
- O BFF faz múltiplas requisições para a fake API (usando [jsonplaceholder](https://jsonplaceholder.typicode.com/)) para buscar dados como usuários, posts, etc.
- O BFF processa / compõe os dados recebidos dessas APIs e retorna um objeto consolidado para o frontend.
