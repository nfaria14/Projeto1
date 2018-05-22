let eventoID = 0
let catID = 0
window.onload = function () {
    //Renderizar categorias
    rendercategorias()
    //renderizar Combobox
    renderCats()
    //Referencias HTML
    let nome = document.getElementById("inputNome")
    let data = document.getElementById("inputData")
    let hora = document.getElementById("inputTime")
    let sala = document.getElementById("inputSala")
    let categoria = document.getElementById("selCategorias")
    let responsavel = document.getElementById("inputResponsavel")
    let imagem = document.getElementById("inputPoster")
    //Ir buscar o ID das categorias
    let categoriaID
    //Submeter Evento
    let formEventos = document.getElementById("frmEventos")
    formEventos.addEventListener("submit", function (event) {
        //Criar Objeto e enviar para o array
        let newEvento = new Evento(nome.value, data.value, hora.value, sala.value, categoriaID.value, responsavel.value, imagem.value)
        eventos.push(newEvento)
        //enviar o array para localstorage


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
    let strHtml = "<option value=''>Todos</option>"
    for (let i = 0; i < tempCats.length; i++) {
        // Obter o nome da categoria no array users
        console.log(tempCats[i])
        for (let j = 0; j < categorias.length; j++) {
            if(categorias[j]._id == tempCats[i]) {
                strHtml += `<option value='${tempCats[i]}'>${categorias[j]._nome}</option>` 
                console.log(categorias[j]._nome)
            }            
        }
    }

    let selCategorias = document.getElementById("selCategorias")
    selCategorias.innerHTML = strHtml
}


//Render Calendário