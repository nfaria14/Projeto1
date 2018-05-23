window.onload=function(){

    //Ir buscar o array de eventos e de categorias atualizado
    rendereventos()
    rendercategorias()
    renderCats()
    

    //Ir buscar a tabela
    let tblEventos=document.getElementById("tblEventos")
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

//Função para renderizar tabela

 // Função para renderizar a tabela 
 function renderTable() {
    let strHtml = "<thead class='thead-dark'><tr>" +
        "<th class='w-2'>#</th>" +
        "<th class='w-50'>Nome</th>"+
        "<th class='w-20'>Data</th>"+
        "<th class='w-20'>Hora</th>"+
        "<th class='w-20'>Sala</th>"+
        "<th class='w-50'>Categorias</th>"+
        "<th class='w-20'>Responsável</th>"+
        "<th class='w-20'>Imagem</th>"+
        "</tr>" +
        "</thead><tbody>"

    for (var i = 0; i < eventos.length; i++) {
        strHtml += "<tr>" +
            "<td>" + eventos[i]._id + "</td>" +
            "<td>" + eventos[i]._nome + "</td>" +
            "<td>" + eventos[i]._data + "</td>" +
            "<td>" + eventos[i]._hora + "</td>" +
            "<td>" + eventos[i]._sala + "</td>" +
            "<td>" + eventos[i]._categoria + "</td>" +
            "<td>" + eventos[i]._responsavel + "</td>" +
            "<td>" + eventos[i]._imagem + "</td>" +
            "<td>"+
            "<a id='" + eventos[i]._id + "' class='remove'><i class='fa fa-remove'></i></a> " +
            "</td>" +
            "<td>"+
            "<a id='" + eventos[i]._id + "' class='edit'><i class='fa fa-remove'></i></a> " +
            "</td>" +
            "</tr>"
    }
    strHtml += "</tbody>"
    tblEventos.innerHTML = strHtml

    // Get all the remove links from the table
    let tdRemove = document.getElementsByClassName("remove")
    // For each link, add a listener to listen the click event
    for (let i = 0; i < tdRemove.length; i++) {
        tdRemove[i].addEventListener("click", function () {
            // By clicking in a specific game, remove it from the array
            let categoriaId = tdRemove[i].getAttribute("id")
            removeCatById(categoriaId)
            renderTable()
        })
    }


}

