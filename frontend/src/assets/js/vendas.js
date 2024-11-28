// Recupera os dados do localStorage
const dadosVenda = JSON.parse(localStorage.getItem('dadosVenda'));

if (dadosVenda) {
    const { cliente, produtos } = dadosVenda;

    // Exibe os dados do cliente
    document.getElementById('cliente-nome').textContent = `Nome: ${cliente.nome}`;
    document.getElementById('cliente-email').textContent = `Email: ${cliente.email}`;

    // Exibe os produtos no resumo
    const produtosLista = document.getElementById('produtos-lista');
    let total = 0;

    produtos.forEach(produto => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.quantidade}</td>
            <td>R$ ${produto.preco.toFixed(2).replace('.', ',')}</td>
            <td>R$ ${produto.subtotal.toFixed(2).replace('.', ',')}</td>
        `;
        produtosLista.appendChild(linha);

        total += produto.subtotal;
    });

    // Exibe o total da venda
    document.getElementById('venda-total').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
} else {
    alert('Nenhuma venda encontrada.');
}
