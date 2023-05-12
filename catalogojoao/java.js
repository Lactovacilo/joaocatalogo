// Falta:
// Fazer uma interface pra adicionar o que eu quiser

var add = document.getElementById("adicionar")

const divCatalogo = document.getElementById("conteudo")

add.addEventListener("click", function(){
    let nome = "banana"
    let descricao = "bonita"
    let categoria = "comida"
    let preco = 200
    let imagem = "https://www.w3schools.com/images/w3schools_green.jpg"

    Catalogo.adicionar(nome, descricao, categoria, preco, imagem)
})


function updateCatalog() {
    divCatalogo.innerHTML = ""

    for (let x = 0; x <= Catalogo.listaProdutos.length - 1; x++) {
        // Código para criar cada div baseado em cada item do Catalogo.listaProdutos

        divCatalogo.innerHTML +=
            `<div class="catalogItem" id="${x}">
                <p>Nome: ${Catalogo.listaProdutos[x].nome}</p>
                <p>Descrição: ${Catalogo.listaProdutos[x].descricao}</p>
                <p>Categoria: ${Catalogo.listaProdutos[x].categoria}</p>
                <p>Preço: ${Catalogo.listaProdutos[x].preco}</p>
                <img src="${Catalogo.listaProdutos[x].imagem}" alt=""></img>
                <div class="catalogButtons">
                    <button onclick="Catalogo.modificar(this);">Modificar</button>
                    <button onclick="Catalogo.remover(this);">Remover</button>
                </div>
            </div>`
    }
}



const Catalogo = {
    adicionar(_nome, _descricao, _categoria, _preco, _imagem) {
        let tempProduto = {
            nome: _nome,
            descricao: _descricao,
            categoria: _categoria,
            preco: _preco,
            imagem: _imagem
        }

        this.listaProdutos.push(tempProduto)

        updateCatalog()
    },

    modificar(e) {
        console.log("Modificar chupado")
        console.log("Index:", e.parentElement.parentElement.id)

        //updateCatalog()
    },

    remover(e) {
        this.listaProdutos.splice(e.parentElement.parentElement.id, 1)

        updateCatalog()
    },

    listaProdutos: []
}