# aula-vip-LucasAlbuquerque

## Conteúdo requisitado

Menu dropdown com itens e link vindo de uma api
- O que pega aqui não é a aparencia, isso eu sei fazer de boa, e sim fazer com loop vindo de
uma api.
Referecia de menu: https://www.mambo.com.br/
Slide de produto com os dados (imagens, titulo, etc) vindo de uma api, utilizando Ajax.
- Slide normal, mas com os dados vindos de uma api, imagem, titulo de cada coisa, etc..
Referência de slide: https://www.mambo.com.br/
Manipular mapa com jQuery e ajax
- Aqui quero aprender a trocar a cor do mapa, icone, marcar endereços, fazer busca de
endereços, filtros…
Exibir lista de artigos na tela usando api
- Aqui teremos titulo - imagem do artigo - descrição e um botão de read more, quando clicar nesse
read more, exibe a descrição completa do artigo
Filtro de estado/cidade puxando de um json/api
- Aqui teremos um json com cidades e estados, quero aprender a fazer aquele filtro maluco de
seleciona estado, só aparecem as cidades referentes a ele
Infinite scroll com Ajax
- Lembra que vamos fazer a lista de artigos na tela usando api? esses artigos também precisam
estar em infinito scroll na listagem
(verificar possibilidade de fazer esse aqui)
- listagem de produtos com Ajax
- thumbnail
- titulo
- descrição
- botão adicionar
-
- Adicionar produto a um carrinho de compras usando Ajax
usando a listagem q fizemos acima, ao clicar no botão adicionar, adiciona a um carrinho fake
- Buscar cep
Fazer consulta de CEP usando a api dos correios

## Projeto Final

Sistema de e-commerce SIMPLES utilizando geolocalização via CEP para mostrar tantos Artigos <br>
como Produtos, utilizando Infinite Scroll.

### Banco de Dados

Coleções:

- Users;
  - Address
    - ...
    - lat/long
  - Sellers;
  - Buyers;
  - Admins;
- Products/Articles;
  - lat/long;
  - image;
  - title;
  - description;
  - price; // Invetory.price.toSell
- Inventory; // veremos
  - product_id
  - price:
    - base;
    - profit; // in %
    - toSell; // price.base * (price.profit / 100)
- Orders;
  - products; // list of products_ids
  - seller_id;
  - buyer_id;

### Backend


### Frontend


## Projeto Final

Um e-commerce simples com Frontend com jQuery e Vanilla que consome uma API<br>
usando Express para as rotas, interligando até o Model feito com Mongoose/MongoDb.<br>

A geoloc dos produtos se dará pela mesma informaço definida no perfil do Seller.

O preço de venda do produto vem de Inventory.price.toSell

## Roteiro


### Primeira Etapa

- Criação do Schema até as Rotas utilizando Mongoose(ODM/MongoDB) e Express:
  - Criação Schema;
  - Criação do Model;
  - Criação do Controller;
  - Criação das Rotas;
- Criação da API:
  - rota que entrega o JSON do MENU;
