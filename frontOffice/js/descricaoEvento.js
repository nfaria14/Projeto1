let nome2 = ""
let evento = ""
let data2 = ""


window.onload = function () {
    rendereventos()
    rendercategorias()
    renderUtilizadores()
    login()
    verificarlogin()
    rendercomentarios()
    renderComment()
    renderTestimonial()

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
            data.value = eventos[i]._data
            hora.value = eventos[i]._hora
            sala.value = eventos[i]._sala
            inputCategoria.value = eventos[i]._categoria
            responsavel.value = eventos[i]._responsavel
            //imagem.value = eventos[i]._imagem

        }

    }


    let frmEventos = document.getElementById("frmEventos")
    frmEventos.addEventListener("submit", function () {
        consolo.log("TUDO LA DENTRO!")
        window.location.replace("mostrarEventos.html")

    })




    document.getElementById("newComentario2").addEventListener("click", function (event) {
        event.preventDefault()
        console.log("ENTREIIIIIIIIIIIIIIIIIIII")
        let texto2 = document.getElementById("inputTexto2")

        let novoComent2 = new Comentario(nome2, evento, data2, texto2.value)
        comentarios.push(novoComent2)
        localStorage.setItem("comentarios", JSON.stringify(comentarios))
        renderTestimonial()
        //  $('#comentarioModal').modal('hide')
        console.log("Estou aqui!!!!!!!!")
    })
}




//Render categorias para selectbox
// Preencher combobox com autores


function renderComment() {

    let input = document.getElementById("validar")
    input.style.visibility = 'hidden'

    let userID = localStorage.getItem("userID")
    let eventoID = localStorage.getItem("eventoID")
    for (let i = 0; i < utilizadores.length; i++) {
        if (utilizadores[i]._id == userID) {
            console.log("a1")
            nome2 = utilizadores[i]._nome
            if (utilizadores[i]._tipo == 0) {
                input.style.visibility = 'visible'
                console.log("a2 a2 a2 a2 a2 a2 a2 a2 a2 a2")
            }

        }

    }
    for (let i = 0; i < eventos.length; i++) {
        console.log("a3")
        if (eventos[i]._id == eventoID) {
            evento = eventos[i]._nome
            data2 = eventos[i]._data
        }
    }


    console.log("C: ", nome2, evento, data2)
}

function renderTestimonial() {

    let testimonial2 = document.getElementById("testimonial2")
    let userID = localStorage.getItem("userID")
    console.log(userID)
    // 2. Para cada Trip vou definir uma Card e compô-la com os dados do objeto

    let strHtmlCard2 = ""
    for (var i = 0; i < comentarios.length; i++) {

        //Verificação dos comentários para o respetivo evento
        if (comentarios[i]._evento == evento && comentarios[i]._data == data2) {


            // Cria a card
            strHtmlCard2 += ` <div class="container">
            <div class="col-lg-12 col-sm-12 text-center">
            <div class="well">
                       <ul data-brackets-id="12674" id = "sortable" class="list-unstyled ui-sortable" >
                       <strong class="pull-left primary-font">${comentarios[i]._nome}</strong>

                   <li class="ui-state-default">${comentarios[i]._texto} </li>
       </ul >`


            for (let x = 0; x < utilizadores.length; x++) {
                if (utilizadores[x]._id == userID) {
                    if (utilizadores[x]._tipo == 1) {

                        strHtmlCard2 += `<a id="${comentarios[i]._id}" href="#" class="btn btn-danger remove">REMOVE</a>`
                        
                    }

                }

            }

            strHtmlCard2 += `</div>
                    </div>      
                </div>`


        }
    }


    testimonial2.innerHTML = strHtmlCard2

    // Obter todos os botões REMOVE
    let btnRemove = document.getElementsByClassName("remove")
    // Para cada botão, adicionar um listener para escutar pelo evento clique
    for (let i = 0; i < btnRemove.length; i++) {
        btnRemove[i].addEventListener("click", function () {
            // By clicking in a specific game, remove it from the array
            let comentarioID = btnRemove[i].getAttribute("id")
            removeComentarioById(comentarioID)
            renderTestimonial()
        })
    }

}


function removeComentarioById(id) {
    console.log("ID: " + id)
    for (let i = 0; i < comentarios.length; i++) {
        if (comentarios[i]._id == id) {
            comentarios.splice(i, 1)
            localStorage.setItem("comentarios", JSON.stringify(comentarios))
        }
    }
}
