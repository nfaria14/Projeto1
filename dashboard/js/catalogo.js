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
                break;
            case "recentes":
                tblEventos.innerHTML = ""
                console.log("O filtro é -" + selFiltros.value)
                console.log("A categoria -" + cat)
                console.log(temparray)
                renderizararray(cat)
                console.log("O ARRAY ANTES DE SER ORDENADO" + temparray)
                ordenararrayRecentes(temparray)
                console.log("O ARRAY DEPOIS" + temparray)
                console.log(temparray)
                renderTable()
                break;
            case "realizados"://Working
                tblEventos.innerHTML = ""
                console.log("O filtro é -" + selFiltros.value)
                console.log("A categoria -" + cat)
                renderizararray(cat)
                filtrarRealizados(temparray)
                renderTable()
                break;
            case "arealizar"://WORKING
                tblEventos.innerHTML = ""
                console.log("O filtro é -" + selFiltros.value)
                console.log("A categoria -" + cat)
                console.log(temparray)
                renderizararray(cat)
                filtrarPorRealizar(temparray)
                console.log(temparray)
                renderTable()
                break;
            case "pontuacoes":
                break;
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
function renderizararray(cat = "") {
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
        if (i % 3== 0) {
            strHtmlCard += `<div class="row">`
        }

        // Cria a card
        strHtmlCard += `<div class="col-sm-4 ">
                <div class="card">
                    <img class="card-img-top" src="${temparray[i]._imagem}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${temparray[i]._nome}</h5>
                        <p class="card-text">${temparray[i]._categoria}</p>`

        strHtmlCard += `<a id="${temparray[i]._id}" href="verevento.html" class="btn btn-warning edit" >Editar</a>`
        strHtmlCard += `<a id="${temparray[i]._id}" href="#" class="btn btn-danger remove">REMOVE</a>`

        strHtmlCard += `</div>
                </div>      
            </div>`

        // Fecha a linha
        if (i % 3== 2) {
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
    //Obter todos os botões EDIT
    let btnEdit = document.getElementsByClassName("edit")
    //Criar um campo na base de dados para guardar o evento que se vai editar
    for (let i = 0; i < btnEdit.length; i++) {
        btnEdit[i].addEventListener("click", function () {
            let eventoID = btnEdit[i].getAttribute("id")
            localStorage.setItem("eventoID", eventoID)
            console.log(eventoID)
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

function filtrarRealizados(array) {//Funciona VERY NICEEEEE
    let hoje = new Date()

    let data = hoje.toISOString().split('T')[0]
    let tamanho = array.length
    for (let i = 0; i < tamanho; i++) {
        if (new Date(data) < new Date(array[i]._data)) {
            console.log(array[i]._data)
            array.splice(i, 1)
            tamanho = array.length
            i--
        } else {
            console.log("Este passa " + array[i]._data)
        }
    }

}
function filtrarPorRealizar(array) {//Funciona VERY NICEEEEEE
    let hoje = new Date()

    let data = hoje.toISOString().split('T')[0]
    let tamanho = array.length
    for (let i = 0; i < tamanho; i++) {
        if (new Date(data) >= new Date(array[i]._data)) {
            console.log(array[i]._data)
            array.splice(i, 1)
            tamanho = array.length
            i--
        } else {
            console.log("Este passa " + array[i]._data)
        }
    }
}

function ordenararrayRecentes(array) {//FUNCIONA FINALMENTE 

    let temp = "" 
    let objtemp
    for (let i=0;i<array.length;i++) {
        if(i>0){ 
            
            console.log(array[i]._data)
            if (new Date(array[i-1]._data) < new Date(array[i]._data)) {
                objtemp=array[i-1]
                temp = array[i-1]._data
                array[i-1]=array[i]
                array[i-1]._data = array[i]._data
                array[i]=objtemp
                array[i]._data = temp
                console.log(array[i]._data)
                i=0
            }
    

        }
       
    }
}


//Later
function filtrarPontuações(array) {


}