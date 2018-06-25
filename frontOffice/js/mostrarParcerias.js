window.onload = function () {
    renderUtilizadores()

    login()
    verificarlogin()
    renderparcerias()
    let userID = localStorage.getItem("userID")
    //verificar o tipo de user e fazer 2 renders diferentes
    for (let i = 0; i < utilizadores.length; i++) {
        if (utilizadores[i]._id == userID) {
            if (utilizadores[i]._tipo == 1) {
                console.log("renderizar docente")
                renderdocente()
            } else {
                console.log("renderizar normal")
                rendernormal()
            }
        }else if(userID==0){

            rendernormal()
        }

    }



}

function rendernormal() {
    let strHtmlCard = ""
    let catalogo = document.getElementById("catalogo")

    for (let i = 0; i < parcerias.length; i++) {
        // Inicia a linha
        if (i % 3 == 0) {
            strHtmlCard += `<div class="row">`
        }

        // Cria a card
        strHtmlCard += `<div class="col-sm-1"></div><div class="col-sm-3">
        <div class="card" >
            <div class="card-body">
                <h5 class="card-title">${parcerias[i]._nome}</h5>
                <p class="card-text">${parcerias[i]._local}</p>`

        strHtmlCard += `<a id="${parcerias[i]._id}" href="${parcerias[i]._url}" class="btn btn-info btn-lg btn-block" >Ver Site</a>`

        strHtmlCard += `</div>
        </div>      
    </div>`

        // Fecha a linha
        if (i % 3 == 2) {
            strHtmlCard += `</div>`
        }
    }
    catalogo.innerHTML = strHtmlCard


}


function renderdocente() {
    let strHtmlCard = ""
    let catalogo = document.getElementById("catalogo")

    for (let i = 0; i < parcerias.length; i++) {
        // Inicia a linha
        if (i % 3 == 0) {
            strHtmlCard += `<div class="row">`
        }

        // Cria a card
        strHtmlCard += `<div class="col-sm-1"></div><div class="col-sm-3">
        <div class="card" >
            <div class="card-body">
                <h5 class="card-title">${parcerias[i]._nome}</h5>
                <p class="card-text">${parcerias[i]._local}</p>`

        strHtmlCard += `<a id="${parcerias[i]._id}" href="${parcerias[i]._url}" class="btn btn-primary btn-lg btn-block" >Ver Site</a>`
        strHtmlCard += `<a id="${parcerias[i]._id}" data-toggle='modal' data-target='#parceiroModal' class="btn btn-warning btn-lg btn-block edit" >Editar</a>`
        strHtmlCard += `<a id="${parcerias[i]._id}" href="#" class="btn btn-danger btn-lg btn-block remove">REMOVE</a>`
        strHtmlCard += `</div>
        </div>      
    </div>`

        // Fecha a linha
        if (i % 3 == 2) {
            strHtmlCard += `</div>`
        }
    }
    catalogo.innerHTML = strHtmlCard
    // Get all the remove links from the table
    let tdRemove = document.getElementsByClassName("remove")
    // For each link, add a listener to listen the click event
    for (let i = 0; i < tdRemove.length; i++) {
        tdRemove[i].addEventListener("click", function () {
            // By clicking in a specific game, remove it from the array
            let parceiroId = tdRemove[i].getAttribute("id")
            removeParceiroById(parceiroId)
            renderTable()
        })
    }
    // Get all the edit links from the table
    let tdEdit = document.getElementsByClassName("edit")
    // For each link, add a listener to listen the click event
    for (let i = 0; i < tdEdit.length; i++) {
        tdEdit[i].addEventListener("click", function () {
            // By clicking in a specific game, edit in the form
            let parceiroId = tdEdit[i].getAttribute("id")
            editParceiroById(parceiroId)
        })
    }
}
//Função para eliminar por ID
// Remove game based on its ID
function removeParceiroById(id) {
    for (let i = 0; i < parcerias.length; i++) {
        if (parcerias[i].id == id) {
            parcerias.splice(i, 1)
            //Atualizaar local storage        
            localStorage.setItem("parcerias", JSON.stringify(parcerias))
        }
    }
}

function editParceiroById(parceiroId) {
    parceriaId = parceiroId
    let modal = document.getElementById("parceiroModal")
    let nome = document.getElementById("inputNome")
    let link = document.getElementById("inputLink")
    let local = document.getElementById("inputLocalizacao")
    let frmParceiros = document.getElementById("frmParceiros")
    let existe = false
    let strerror = ""
    let aux = 0

    //Preencher o form
    for (let i = 0; i < parcerias.length; i++) {
        if (parceriaId == parcerias[i]._id) {
            console.log(parceriaId)
            nome.value = parcerias[i]._nome
            link.value = parcerias[i]._url
            local.value = parcerias[i]._local
            aux = i
        }
    }
    frmParceiros.addEventListener("submit", function (event) {
        for (let i = 0; i < parcerias.length; i++) {
            if (nome.value == parcerias[i]._nome && parceriaId != parcerias[i]._id) {
                existe = true
            }

        }
        if (existe) {
            strerror = "Parceria já existe"
        }

        if (strerror != "") {
            alert(strerror)
        } else {
            //Criar Objeto adicionar ao array e enviar para a locarstorage

            parcerias[aux]._nome = nome.value
            parcerias[aux]._local = local.value
            parcerias[aux]._url = link.value

            localStorage.setItem("parcerias", JSON.stringify(parcerias))
            modal.modal('hide')
            renderTable()
        }
        event.preventDefault()
    })

}