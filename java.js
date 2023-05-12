var add = document.getElementById("botao")

const divCatalogo = document.getElementsByClassName("modificar")[0]
const body = document.getElementById("corpo")

add.addEventListener("click", function(){
    let nome = "nome"
    let descricao = "descricao"
    let categoria = "categoria"
    let preco = "preco"
    let imagem = "https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png"

    Catalogo.adicionar(nome, descricao, categoria, preco, imagem)
})


async function updateCatalog() {
    console.log(" ")
    console.log(" ")
    console.log(" ")
    divCatalogo.innerHTML = ""

    for (let x = 0; x <= Catalogo.listaProdutos.length - 1; x++) {
        // Código para criar cada div baseado em cada item do Catalogo.listaProdutos

        divCatalogo.innerHTML += 
            `<div class="wrapper">
                <div class="catalogItem" id="${x}">
                    <p>Nome: <span id="nome${x}">${Catalogo.listaProdutos[x].nome}</span></p>
                    <img id="img${x}" src="${Catalogo.listaProdutos[x].imagem}" alt=""></img>
                    <p>Descrição: <span id="descricao${x}">${Catalogo.listaProdutos[x].descricao}</span></p>
                    <p>Categoria: <span id="categoria${x}">${Catalogo.listaProdutos[x].categoria}</span></p>
                    <p>Preço: R$ <span id="preco${x}">${Catalogo.listaProdutos[x].preco}</span></p>
                    <div class="catalogButtons">
                        <button onclick="Catalogo.modificar(this, ${x});"><i class="fa-solid fa-pen"></i></button>
                        <button onclick="Catalogo.remover(this);"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </div>`

        let item = await document.getElementById(x)
        let wrapper = await item.parentElement

        // wrapper.style.width = item.offsetWidth+"px"
        // wrapper.style.height = item.offsetHeight+"px"
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

    modificar(e, pos) {
        let Index = e.parentElement.parentElement.id
        let _width = e.parentElement.parentElement.offsetWidth
        let _height = e.parentElement.parentElement.offsetHeight

        e.parentElement.parentElement.parentElement.innerHTML +=
        `<div class="interfaceClass" style="width: calc(${_width}px - 40px); height: calc(${_height}px - 40px);">
            <input type="text" placeholder="nome" class="inputNome" value="${Catalogo.listaProdutos[Index].nome}">
            <input type="text" placeholder="descricao" class="inputDescricao" value="${Catalogo.listaProdutos[Index].descricao}">
            <input type="text" placeholder="categoria" class="inputCategoria" value="${Catalogo.listaProdutos[Index].categoria}">
            <input type="text" placeholder="preco" class="inputPreco" value="${Catalogo.listaProdutos[Index].preco}">
            <input type="text" placeholder="imagem" class="inputImg" value="${Catalogo.listaProdutos[Index].imagem}">
            <input type="hidden" class="inputID" value="${pos}">
            <div class="catalogButtons">
                <button class="confirmar" onclick="Catalogo.ConfirmarModify(this)">Confirmar</button>
                <button class="cancelar" onclick="Catalogo.CancelarModify(this)">Cancelar</button>
            </div>
        </div>`
    },

    remover(e) {
        this.listaProdutos.splice(e.parentElement.parentElement.id, 1)

        updateCatalog()
    },


    ConfirmarModify(e) {
        let _newValueNome = e.parentElement.parentElement.getElementsByClassName("inputNome")[0].value
        let _newValueDescricao = e.parentElement.parentElement.getElementsByClassName("inputDescricao")[0].value
        let _newValueCategoria = e.parentElement.parentElement.getElementsByClassName("inputCategoria")[0].value
        let _newValuePreco = e.parentElement.parentElement.getElementsByClassName("inputPreco")[0].value
        let _newValueImg = e.parentElement.parentElement.getElementsByClassName("inputImg")[0].value
        
        let _newValueID = e.parentElement.parentElement.getElementsByClassName("inputID")[0].value

        let ChangePos = this.listaProdutos[_newValueID]

        ChangePos.nome = _newValueNome,
        ChangePos.descricao = _newValueDescricao,
        ChangePos.categoria = _newValueCategoria,
        ChangePos.preco = _newValuePreco,
        ChangePos.imagem = _newValueImg

        updateCatalog()
    },

    CancelarModify(e) {
        e.parentElement.parentElement.remove()
    },

    listaProdutos: []
}

document.addEventListener("DOMContentLoaded", function(){
    Catalogo.adicionar("Sapato Masculino", "Sapato bom", "Sapato", "200", "https://cdnv2.moovin.com.br/detalhecalcados/imagens/produtos/det/sapato-masculino-tamanho-grande-social-tecnologia-air-bag-3d-jota-pe-71454-preto-4.png")
})