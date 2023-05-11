var add = document.getElementById("adicionar")

const forms = document.getElementById("forms")

const divCatalogo = document.getElementById("NOME")

add.addEventListener("click", function(){
    let nome = "banana"
    let descricao = "bonita"
    let categoria = "comida"
    let preco = 200
    let imagem = "imagem"
    Catalogo.adicionar(nome, descricao, categoria, preco, imagem)
})

mod.addEventListener("click", function(){
     let nome = "asfnsapogmnsa"
     console.log("NOOOSSA")
})

remove.addEventListener("click", function(){
    
})

// forms.addEventListener("submit")

function updateCatalog() {
    divCatalogo.innerHTML = ""

    for (let x = 0; Catalogo.listaProdutos.length - 1; x++) {
        // Código para criar cada div baseado em cada item do Catalogo.listaProdutos

        divCatalogo.innerHTML +=
            `<div>
                <p>${}</p>
                <p>${}</p>
                <p>${}</p>
                <p>${}</p>
                <p>${}</p>
                <img src="" alt=""></img>
                <div>
                    <button onclick="modificar()"></button>
                    <button onclick="remover()"></button>
                </div>
            </div>
            `
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
        console.log(Catalogo)

        updateCatalog()
    },

    modificar() {


        updateCatalog()
    },

    remover() {


        updateCatalog()
    },

    listaProdutos: []
}