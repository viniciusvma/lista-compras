# Gerenciador de Lista de Compras

Este é um simples aplicativo web para gerenciar uma lista de compras. Ele permite adicionar produtos com seus respectivos valores e exibe o total acumulado dos itens adicionados.

## Funcionalidades

- Adicionar produtos à lista de compras, especificando o nome do produto e seu valor.
- Excluir produtos da lista.
- Armazenamento local: os dados da lista são salvos no armazenamento local do navegador, permitindo que a lista persista entre as sessões.

## Utilização

Para usar o aplicativo, abra o arquivo `index.html` em seu navegador. Você verá campos para inserir o nome do produto e seu valor. Após preencher os campos, clique no botão "Adicionar" para adicionar o produto à lista.

## Como Funciona

O aplicativo utiliza JavaScript para manipular o DOM e armazenar os dados localmente no navegador. Aqui está um resumo do funcionamento do código:

- O código JavaScript define variáveis para os elementos HTML relevantes, como campos de entrada, tabela de lista de compras e elemento para exibir o total.
- Ele também inicializa uma lista de produtos vazia e uma variável para rastrear o valor total da lista.
- Se houver dados salvos no armazenamento local, o aplicativo os carrega e exibe na tabela.
- Quando o usuário adiciona um produto, o aplicativo verifica se os campos de entrada estão preenchidos e, em seguida, adiciona o produto à lista, atualizando a tabela e o total.
- Ao excluir um produto, o aplicativo remove-o da lista e atualiza a tabela e o total.
- Todas as alterações na lista são salvas no armazenamento local para persistência.
