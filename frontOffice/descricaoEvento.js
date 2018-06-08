window.onload = function () {
    rendereventos()
    rendercategorias()
    renderCats()

    //EVENTOID
    let eventoid = localStorage.getItem("eventoID")
    //Referencias HTML
    let nome = document.getElementById("inputNome")
    let data = document.getElementById("inputData")
    let hora = document.getElementById("inputTime")
    let sala = document.getElementById("inputSala")
    let inputCategoria = document.getElementById("inputCategoria")
    let responsavel = document.getElementById("inputResponsavel")
    let imagem = document.getElementById("inputPoster")
    let strerr = ""
    let stringcat = ""
    //Preencher o form
    for (let i = 0; i < eventos.length; i++) {
        if (eventos[i]._id == eventoid) {
            nome.value = eventos[i]._nome
            console.log(eventos)
            data.value = eventos[i]._data
            hora.value = eventos[i]._hora
            sala.value = eventos[i]._sala
            inputCategoria.value = eventos[i]._categoria
            responsavel.value = eventos[i]._responsavel
            imagem.value = eventos[i]._imagem

        }

    }


    let frmEventos = document.getElementById("frmEventos")
    frmEventos.addEventListener("submit", function () {
        consolo.log("TUDO LA DENTRO!")
        window.location.replace("mostrarEventos.html")

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