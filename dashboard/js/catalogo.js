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
    // let selCategorias = document.getElementById("selCategorias")
    let selFiltros = document.getElementById("selFiltros")
    /*
    let categoria= selCategorias.options[selCategorias.selectedIndex].value*/
    let a = document.getElementById('selCategorias')
    let cat = a.options[a.selectedIndex].value

    console.log(selCategorias.innerHTML)
    renderizararray()
    renderTable()
    searchBtn.addEventListener("click", function () {
        let cat = a.options[a.selectedIndex].innerHTML
        switch (selFiltros.value) {
            case ""://WORKING
                tblEventos.innerHTML = ""
                console.log("A categoria -" + cat)
                renderizararray(cat)
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



// Função para renderizar a tabela -- FINALMENTE DAS <3
function renderizararray(cat ="") {
    temparray = []
    console.log("___" + cat)
    for (let i = 0; i < eventos.length; i++) {
        if (cat == "Lista de categorias" || eventos[i]._categoria.indexOf(cat) != -1) {
            temparray.push(eventos[i])

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

        strHtmlCard += `<a id="${temparray[i]._id}" href="#" class="btn btn-warning edit" data-toggle='modal' data-target='#eventoModal'>Editar</a>`
        strHtmlCard += `<a id="${temparray[i]._id}" href="#" class="btn btn-danger remove">REMOVE</a>`

        strHtmlCard += `</div>
                </div>      
            </div>`

        // Fecha a linha
        if (i % 3 == 2) {
            strHtmlCard += `</div>`
        }

    }
    let tblEventos = document.getElementById("catalog")

    tblEventos.innerHTML = strHtmlCard

    // Obter todos os botões REMOVE
    let btnRemove = document.getElementsByClassName("remove")
    console.log(btnRemove.length)
    // Para cada botão, adicionar um listener para escutar pelo evento clique
    for (let i = 0; i < btnRemove.length; i++) {
        btnRemove[i].addEventListener("click", function () {
            // By clicking in a specific game, remove it from the array
            let eventoId = btnRemove[i].getAttribute("id")
            removeeventoById(eventoId)
            renderTable()
        })
    }

    // Get all the edit links from the table
    let tdEdit = document.getElementsByClassName("edit")
    // For each link, add a listener to listen the click event
    for (let i = 0; i < tdEdit.length; i++) {
        console.log("??????"+tdEdit.length)
        tdEdit[i].addEventListener("click", function () {
            // By clicking in a specific game, edit in the form
            let eventoId = tdEdit[i].getAttribute("id")
            editeventoById(eventoId)
        })
    }

}
function removeeventoById(id) {
    console.log("ID: " + id)
    for (let i = 0; i < eventos.length; i++) {
        if (eventos[i]._id == id) {
            eventos.splice(i, 1)
            renderizararray()
            localStorage.setItem("eventos", JSON.stringify(eventos))
        }
    }
}


function editeventoById(eventoId) {
    eventoId = eventoId
    let existe=false
    let modal = document.getElementById("eventoModal")
    //Renderizar eventos
    rendereventos()
    //Renderizar categorias
    rendercategorias()
    //renderizar Combobox
    rendercombo()
    //Referencias HTML
    let nome = document.getElementById("inputNome")
    let data = document.getElementById("inputData")
    let hora = document.getElementById("inputTime")
    let sala = document.getElementById("inputSala")
    let inputCategoria = document.getElementById("inputCategoria")
    let responsavel = document.getElementById("inputResponsavel")
    let imagem = document.getElementById("inputPoster")
    let strerror = ""
    let stringcat = ""

    //Definir data minima
    let data2 = new Date()
    let datinha2 = data2.toISOString().split('T')[0]

    data.setAttribute('min', datinha2)
    //Submeter Evento
    let formEventos = document.getElementById("frmEventos")
    let aux = 0

    //Preencher o form
    for (let i = 0; i < eventos.length; i++) {
        if (eventoId == eventos[i]._id) {
            console.log(eventoId)
            nome.value = eventos[i]._nome
            data.value = eventos[i]._data
            hora.value = eventos[i]._hora
            sala.value =eventos[i]._sala
            inputCategoria.value=eventos[i]._categoria
            responsavel.value=eventos[i]._responsavel
            imagem.value=eventos[i]._imagem
            aux = i
        }
    }
    formEventos.addEventListener("submit", function (event) {
        for (let i = 0; i < eventos.length; i++) {
            if (nome.value == eventos[i]._nome && eventoId != eventos[i]._id) {
                existe = true
            }

        }
        if (existe) {
            strerror = "evento já existe"
        }

        if (strerror != "") {
            alert(strerror)
        } else {
            //Criar Objeto adicionar ao array e enviar para a locarstorage
            console.log("O ID DO EVENTO"+aux)
            eventos[aux]._nome = nome.value
            eventos[aux]._data = data.value
            eventos[aux]._hora = hora.value
            eventos[aux]._sala=sala.value
            eventos[aux]._categoria=inputCategoria.value
            eventos[aux]._responsavel=responsavel.value
            eventos[aux]._imagem=responsavel.imagem
            localStorage.removeItem("eventos")
            localStorage.setItem("eventos", JSON.stringify(eventos))
            modal.modal('hide')
            renderTable()
        }
        event.preventDefault()
    })

}
