window.onload = function () {
    logout()

    renderUtilizadores()
    renderDocentes()
    let tblUsers = document.getElementById("tblUsers")
    renderTable()

}

// Função para renderizar a tabela 
function renderTable() {
    let strHtml = "<thead class='thead-dark'><tr>" +
        "<th class='w-2'>#</th>" +
        "<th class='w-50'>Nome</th>" +
        "<th class='w-50'>Email</th>" +
        "<th class='w-50'>Password</th>" +
        "<th class='w-50'>Tipo de utilizador</th>" +
        "</tr>" +
        "</thead><tbody>"

    for (var i = 0; i < utilizadores.length; i++) {
        strHtml += "<tr>" +
            "<td>" + utilizadores[i]._id + "</td>" +
            "<td>" + utilizadores[i]._nome + "</td>" +
            "<td>" + utilizadores[i]._email + "</td>" +
            "<td>" + utilizadores[i]._password + "</td>" +
            "<td>" + utilizadores[i]._tipo + "</td>" +
            "<td>" +
            "<a id='" + utilizadores[i]._id + "' class='edit' data-toggle='modal' data-target='#userModal'><i class='fa fa-edit'></i></a> " +
            "</td>" +
            "<td>" +
            "<a id='" + utilizadores[i]._id + "' class='remove'><i class='fa fa-remove'></i></a> " +
            "</td>" +
            "</tr>"
    }
    strHtml += "</tbody>"
    tblUsers.innerHTML = strHtml

    // Get all the remove links from the table
    let tdRemove = document.getElementsByClassName("remove")
    // For each link, add a listener to listen the click event
    for (let i = 0; i < tdRemove.length; i++) {
        tdRemove[i].addEventListener("click", function () {
            // By clicking in a specific game, remove it from the array
            let userId = tdRemove[i].getAttribute("id")
            removeUserById(userId)
            renderTable()
        })
    }
    // Get all the edit links from the table
    let tdEdit = document.getElementsByClassName("edit")
    // For each link, add a listener to listen the click event
    for (let i = 0; i < tdEdit.length; i++) {
        tdEdit[i].addEventListener("click", function () {
            // By clicking in a specific game, edit in the form
            let userId = tdEdit[i].getAttribute("id")
            editUserById(userId)
        })
    }

}

//Função para eliminar por ID
// Remove game based on its ID
function removeUserById(id) {
    for (let i = 0; i < utilizadores.length; i++) {
        if (utilizadores[i]._id == id) {
            let userNome=utilizadores[i]._nome
            let email=utilizadores[i]._email
            if (utilizadores[i]._tipo == 1) {
                console.log("Entrou")
                for (let i = 0; i < docentes.length; i++) {
                    if (docentes[i].email == email && docentes[i]._nome==userNome) {
                        docentes.splice(i, 1)
                        //Atualizaar local storage        
                        console.log(docentes)
                        localStorage.setItem("docentes", JSON.stringify(docentes))
                    }
                }
            }
            utilizadores.splice(i, 1)
            console.log(utilizadores)
            //Atualizaar local storage        
            localStorage.setItem("utilizadores", JSON.stringify(utilizadores))
        }
    }

}
function editUserById(userId) {
    userId = userId
    let modal = document.getElementById("userModal")
    let nome = document.getElementById("inputNome")
    let email = document.getElementById("inputEmail")
    let password = document.getElementById("inputPassword")
    let tipo = document.getElementById("selTipo")
    let frmUserss = document.getElementById("frmUsers")
    let existe = false
    let strerror = ""
    let aux = 0

    //Preencher o form
    for (let i = 0; i < utilizadores.length; i++) {
        if (userId == utilizadores[i]._id) {
            console.log(userId)
            nome.value = utilizadores[i]._nome
            email.value = utilizadores[i]._email
            password.value = utilizadores[i]._password
            tipo.value = utilizadores[i]._tipo
            aux = i
        }
    }
    frmUsers.addEventListener("submit", function (event) {
        for (let i = 0; i < utilizadores.length; i++) {
            if (email.value == utilizadores[i]._email && userId != utilizadores[i]._id) {
                existe = true
            }

        }
        if (existe) {
            console.log(strerror)
            strerror = "Utilizador já existe"
        }

        if (strerror != "") {
            console.log(strerror)

            alert(strerror)
        } else {
            //Criar Objeto adicionar ao array e enviar para a locarstorage
            console.log(strerror)

            utilizadores[aux]._nome = nome.value
            utilizadores[aux]._email = email.value
            utilizadores[aux]._password = password.value
            utilizadores[aux]._tipo = tipo.value
            if (tipo.value == 1) {
                let newDocente = new Docente(email.value, nome.value, "Por preencher", "Por preencher", "Por preencher","Por preencher")
                docentes.push(newDocente)
                console.log(docentes)
                localStorage.setItem("docentes", JSON.stringify(docentes))
                renderDocentes()
            
            }
            localStorage.setItem("utilizadores", JSON.stringify(utilizadores))
            modal.modal('hide')
            renderTable()
        }
        event.preventDefault()
    })

}
