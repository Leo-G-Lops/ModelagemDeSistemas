const apiProdutos = "http://localhost:3000/produtos";
const apiEstoque = "http://localhost:3000/estoque";

//Produto
async function cadastrarProduto() {
    let nomeInput = document.getElementById("nome");
    let tipoInput = document.getElementById("tipo");

    await fetch(apiProdutos, {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nomeInput.value,
            tipo: tipoInput.value
        })
    });
    nomeInput.value = "";
    tipoInput.value = "";

    alert("Produto cadastrado com sucesso");
    carregarProduto();

}

async function carregarProduto(){
    let resposta = await fetch(apiProdutos);
    let dados = await resposta.json();
    let lista = document.getElementById("listaProdutos");

    lista.innerHTML = "";

    dados.forEach(function(produto){
        let item = document.createElement("li");
        item.innerText = `ID:${produto.id} | ${produto.nome} - ${produto.tipo}`;
        lista.appendChild(item);
    });
}

//Estoque 

    async function cadastrarEstoque() {
    let produtoIdInput = document.getElementById("produto_id");
    let quantidadeInput = document.getElementById("quantidade");

    await fetch(apiEstoque, {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            produto_id: produtoIdInput.value,
            quantidade: quantidadeInput.value
        })
    });
    produtoIdInput.value = "";
    quantidadeInput.value = "";

    alert("Estoque cadastrado com sucesso")
    carregarEstoque();

}

async function carregarEstoque(){
    let resposta = await fetch(apiProdutos);
    let dados = await resposta.json();
    let lista = document.getElementById("listaEstoque");

    lista.innerHTML = "";

    dados.forEach(function(estoque){
        let item = document.createElement("li");
        item.innerText = `ID:${estoque.produto_id} | ${estoque.quantidade}`;
        lista.appendChild(item);
    });
}
