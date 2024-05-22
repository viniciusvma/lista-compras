const produto = document.querySelector('.product');
const valor = document.querySelector('.value');
const adicionar = document.querySelector('.add');
const tbody = document.querySelector('.table-list tbody');
const somaTotal = document.querySelector('.footer-list h3');

let listaProdutos = [];
let contador = 0;
let somaValor = 0;

if (localStorage.getItem('listaProdutos')) {
    listaProdutos = JSON.parse(localStorage.getItem('listaProdutos'));
    listarProdutos();
}

function adicionarProdutos() {
    if (produto.value.trim() === '' || valor.value.trim() === '') {
        alert('Os campos produto e valor são obrigatórios.');
        return;
    }

    listaProdutos.push({
        l_produto: produto.value,
        l_valor: valor.value,
        l_id: contador++
    });

    let valorNumerico = parseFloat(valor.value);
    somaValor = somaValor + valorNumerico;

    produto.value = '';
    valor.value = '';

    salvarLocalStorage();
    listarProdutos();
}

function listarProdutos() {
    tbody.innerHTML = '';

    listaProdutos.forEach(item => {
        const row = document.createElement('tr');

        const cellProduto = document.createElement('td');
        cellProduto.textContent = item.l_produto;

        const cellValor = document.createElement('td');
        cellValor.textContent = `R$ ${item.l_valor}`;

        const cellCancel = document.createElement('td');
        cellCancel.classList.add('cancel-image');

        row.appendChild(cellProduto);
        row.appendChild(cellValor);
        row.appendChild(cellCancel);

        tbody.appendChild(row);
    });

    totalProdutos();
}

function totalProdutos() {
    somaTotal.textContent = `Total: R$ ${somaValor.toFixed(2)}`;
}

function salvarLocalStorage() {
    localStorage.setItem('listaProdutos', JSON.stringify(listaProdutos));
}

adicionar.addEventListener('click', adicionarProdutos);

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('cancel-image')) {

        const row = event.target.closest('tr');

        const rowIndex = Array.from(row.parentNode.children).indexOf(row);

        listaProdutos.splice(rowIndex, 1);

        row.remove();

        somaValor -= parseFloat(row.children[1].textContent.replace('R$ ', ''));

        salvarLocalStorage();
        totalProdutos();
    }
});