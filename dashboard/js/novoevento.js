

window.onload = function () {
    //Renderizar eventos
    rendereventos()
    //Renderizar categorias
    rendercategorias()
    //renderizar Combobox
    renderCats()
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


    //Submeter Evento
    let formEventos = document.getElementById("frmEventos")
    formEventos.addEventListener("submit", function (event) {
        let campos = inputCategoria.value.split(";")
        let existe=false
        //Verificar se as categorias existem
       for (let i = 0; i < campos.length; i++) {
            //Agora percorrer o array das categorias a ver se o campo x existe, se existir existe= true e sempre q ele acaba de percorrer isso verifica como o existe está
            for (let j = 0; j < categorias.length; j++) {
                if(campos[i].toUpperCase()==categorias[j]._nome.toUpperCase()){
                    existe=true
                    stringcat+=categorias[j]._nome+";"
                    console.log("__"+stringcat)
                }
                console.log("__"+stringcat)
            }
            if(existe=true){
                console.log(campos[i])
                existe=false

            }else{
                strerr+=campos[i]+"Não existe"

            }
           
       }
        //Verificar se string de erro está vazia
        if (strerr == "") {
            //Criar Objeto e enviar para o array
            let newEvento = new Evento(nome.value, data.value, hora.value, sala.value, stringcat, responsavel.value, imagem.value)
            eventos.push(newEvento)
            //enviar o array para localstorage
            localStorage.setItem("eventos", JSON.stringify(eventos))
        } else {
            alert(strerr)
        }

        event.preventDefault()

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

