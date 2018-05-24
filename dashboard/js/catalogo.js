window.onload = function () {

    //Ir buscar o array de eventos e de categorias atualizado
    rendereventos()
    rendercategorias()
    renderCats()


    //Ir buscar a tabela
    let tblEventos = document.getElementById("tblEventos")
    renderTable()


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
            console.log(tempCats)
        }
    }
    console.log(tempCats)
    // 3. Criar o HTML (option) para todos as categorias encontradas
    let strHtml = "<option value=''>Lista de categorias</option>"
    for (let i = 0; i < tempCats.length; i++) {
        // Obter o nome da categoria no array users
        console.log(tempCats[i])
        for (let j = 0; j < categorias.length; j++) {
            if (categorias[j]._id == tempCats[i]) {
                strHtml += `<option value='${tempCats[i]}'>${categorias[j]._nome}</option>`
                console.log(categorias[j]._nome)
            }
        }
    }

    let selCategorias = document.getElementById("selCategorias")
    selCategorias.innerHTML = strHtml
}

//Função para renderizar tabela--MAL

// Função para renderizar a tabela 
function renderTable(categoria = "", filtro = "") {
    //Iterar sobre o array de eventos
    // 2. Para cada evento vou definir uma Card e compô-la com os dados do objeto

    switch (filtro) {
        case "": //Renderizar por categoria
            renderTablecategorias(categoria)
            break;
        case "recentes"://Renderizar por recentes
            break;
        case "pontuacoes"://Renderizar por pontuaçoes
            break;
        case "realizados"://Renderizar já realizados
            break;
        case "arealizar"://Renderizar os que ainda vão acontecer
            break;




    }
}





function renderTablecategorias(categorias = "") {
    let strHtmlCard=""
    //Percorrer o array de eventos
    for (let i = 0; i < eventos.length; i++) {
        let campos = eventos[i]._categoria.split(";")
        //Percorrer o campo
        for (let j = 0; j < campos.length; j++) {


            if ((categorias == "") ||
                (categorias == campos[j] && campos[j] != "")) {

                // Inicia a linha
                if (i % 3 == 0) {
                    strHtmlCard += `<div class="row">`
                }

                // Cria a card
                strHtmlCard += `<div class="col-sm-4">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${eventos[i]._imagem}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${eventos[i]._nome}</h5>
                <p class="card-text">${eventos[i]._sala}</p>
                <p class="card-text">${eventos[i]._data}</p>
                <p class="card-text">${eventos[i]._hora}</p>`
                strHtmlCard += `<a id="${eventos[i]._id}" href="#" class="btn btn-danger remove">Editar</a>`

                strHtmlCard += `<a id="${eventos[i]._id}" href="#" class="btn btn-danger remove">Remover</a>`

                strHtmlCard += `</div>
        </div>      
    </div>`

                // Fecha a linha
                if (i % 3 == 2) {
                    strHtmlCard += `</div>`
                    let eventosCatalog = document.getElementById("catalog")
                    tripsCatalog.innerHTML = strHtmlCard

                    // Obter todos os botões REMOVE
                    let btnRemove = document.getElementsByClassName("remove")
                    // Para cada botão, adicionar um listener para escutar pelo evento clique
                    for (let i = 0; i < btnRemove.length; i++) {
                        btnRemove[i].addEventListener("click", function () {
                            // By clicking in a specific game, remove it from the array
                            let tripId = btnRemove[i].getAttribute("id")
                            removeTripById(tripId)
                            renderCatalog(userId)
                        })
                    }

                   
                }

            }
        }
    }
}
