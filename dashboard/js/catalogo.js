let temparray = []
window.onload = function () {

    //Ir buscar o array de eventos e de categorias atualizado
    rendereventos()
    rendercategorias()
    renderCats()
    

    //Ir buscar a tabela
    let tblEventos = document.getElementById("catalog")
    
    //Ir buscar o botão
    let searchBtn = document.getElementById("btnSearch")
    let selCategorias = document.getElementById("selCategorias")
    let selFiltros = document.getElementById("selFiltros")
    let categoria=selCategorias.value
    renderizararray()
    renderTable()
    searchBtn.addEventListener("click", function () {
        switch (selFiltros.value) {
            case "":
            tblEventos.innerHTML=""
                renderizararray(categoria)
                renderTable()
                break
        }

    })
}


//Render categorias para selectbox
// Preencher combobox com autores
function renderCats() {
    let tempCats = []
    // 1. Iterar sobre o array categorias
    for (var i = 0; i < categorias.length; i++) {
        if (tempCats.indexOf(categorias[i]._id) == -1) {
            // 2. Guardar todos os CatsId não duplicados
            tempCats.push(categorias[i]._id)
        }
    }
  
    // 3. Criar o HTML (option) para todos as categorias encontradas
    let strHtml = "<option value=''>Lista de categorias</option>"
    for (let i = 0; i < tempCats.length; i++) {
        // Obter o nome da categoria no array users
        
        for (let j = 0; j < categorias.length; j++) {
            if (categorias[j]._id == tempCats[i]) {
                strHtml += `<option value='${tempCats[i]}'>${categorias[j]._nome}</option>`
                
            }
        }
    }

    let selCategorias = document.getElementById("selCategorias")
    selCategorias.innerHTML = strHtml
}



// Função para renderizar a tabela 
function renderizararray(categoria="") {
    console.log("___"+categoria)
    for (let i = 0; i < eventos.length; i++) {
        if (categoria =="" || eventos[i]._categoria.indexOf(categoria) == 1) {
            temparray.push(eventos[i])
            console.log(eventos[i]._nome)
        }
    }
}

function renderTable() {
    let strHtmlCard = ""
    for (let i = 0; i < temparray.length; i++) {
        // Inicia a linha
        if (i % 3 == 0) {
            strHtmlCard += `<div class="row">`
        }

        // Cria a card
        strHtmlCard += `<div class="col-sm-6">
                <div class="card" style="width: 15rem;">
                    <img class="card-img-top" src="${temparray[i]._imagem}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${temparray[i]._nome}</h5>
                        <p class="card-text">${temparray[i]._categoria}</p>`
        

            strHtmlCard += `<a id="${temparray[i]._id}" href="#" class="btn btn-danger remove">REMOVE</a>`
        
        strHtmlCard += `</div>
                </div>      
            </div>`

        // Fecha a linha
        if (i % 3 == 2) {
            strHtmlCard += `</div>`
        }
        console.log("O CARD DEVIA ESTAR A DAR"+temparray[i]._nome)

    }
    let tblEventos = document.getElementById("catalog")

    tblEventos.innerHTML=strHtmlCard
}