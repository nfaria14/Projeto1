window.onload = function () {
    renderUtilizadores()
    renderDocentes()
    login()
    verificarlogin()
    let frmDocente = document.getElementById('frmDocente')
    let frmEstudante = document.getElementById('frmEstudante')
    frmDocente.style.display = 'none'
    frmEstudante.style.display = 'none'
    //Referências HTML FORM ESTUDANTE
    let nome = document.getElementById("inputNome1")
    let email = document.getElementById("inputEmail1")
    let oldpw = document.getElementById("oldPassword1")
    let newpw = document.getElementById("newPassword1")
    frmEstudante.addEventListener("submit", function (event) {
        event.preventDefault()
        let strerr = ""

        for (let i = 0; i < utilizadores.length; i++) {
            if (utilizadores[i]._id == userID) {
                utilizadores[i]._nome = nome.value

                utilizadores[i]._email = email.value
                if (newpw.value != "") {
                    console.log("ele está atentar mudar de password")
                    if (oldpw.value == utilizadores[i]._password) {
                        utilizadores[i]._password = newpw.value
                        console.log(utilizadores[i]._password)
                    } else {
                        alert("A palavra passe antiga tem que corresponder")
                        str += "Erro na pw"
                    }
                }
                console.log("O email antigo é: " + utilizadores[i]._email)
                console.log("A password é: " + utilizadores[i]._password)
            }
        }
        if (strerr == "") {
            localStorage.setItem("utilizadores", JSON.stringify(utilizadores))
            location.reload()

        } else {
            console.log(strerr)
        }
    })

    /////////////////////////////////////////////////////
    //Referências HTML FORM DOCENTE

    let nome2 = document.getElementById("inputNome")
    let email2 = document.getElementById("inputEmail")
    let oldpw2 = document.getElementById("oldPassword")
    let newpw2 = document.getElementById("newPassword")
    let uc = document.getElementById("inputUC")
    let formacao = document.getElementById("inputformacao")
    let cv = document.getElementById("inputCV")
    let foto = document.getElementById("foto")
    let novafoto = document.getElementById("novafoto")
    let userID = localStorage.getItem("userID")
    for (let i = 0; i < utilizadores.length; i++) {
        if (utilizadores[i]._id == userID) {
            if (utilizadores[i]._tipo == 0) {
                console.log(userID)
                console.log(utilizadores[i])
                console.log(utilizadores[i]._tipo)
                console.log("Estudante")
                frmEstudante.style.display = 'block'
                console.log(utilizadores[i]._nome)
                nome.value = utilizadores[i]._nome
                email.value = utilizadores[i]._email
            } else if (utilizadores[i]._tipo == 1) {
                console.log("Docente")
                frmDocente.style.display = 'block'
                nome2.value = utilizadores[i]._nome
                email2.value = utilizadores[i]._email
                console.log(email2.value)
                for (let j = 0; j < docentes.length; j++) {
                    if (docentes[j]._email == email2.value) {
                        uc.value = docentes[j]._uc
                        cv.value = docentes[j]._cv
                        formacao.value = docentes[j]._formacao
                        foto.value = docentes[j]._foto
                    }
                }
            }
        }
    }
    frmDocente.addEventListener("submit", function (event) {
        event.preventDefault()
        let strerr = ""
        let emailantigo = ""
        for (let i = 0; i < utilizadores.length; i++) {
            if (utilizadores[i]._id == userID) {
                utilizadores[i]._nome = nome2.value
                emailantigo = utilizadores[i]._email
                utilizadores[i]._email = email2.value
                if (newpw2.value != "") {
                    console.log("ele está atentar mudar de password")
                    if (oldpw2.value == utilizadores[i]._password) {
                        utilizadores[i]._password = newpw2
                        console.log(utilizadores[i]._password)
                    } else {
                        alert("A palavra passe antiga tem que corresponder")
                        str += "Erro na pw"
                    }
                }
                console.log("O email antigo é: " + utilizadores[i]._email)
            }
        }

        for (let i = 0; i < docentes.length; i++) {
            if (docentes[i]._email == emailantigo) {
                docentes[i]._nome = nome2.value
                docentes[i]._email = email2.value
                docentes[i]._foto = foto.value
                docentes[i]._formacao = formacao.value
                docentes[i]._uc = uc.value
                docentes[i]._cv = cv.value
                if (novafoto.value != "") {
                    docentes[i]._foto = novafoto.value
                }

            }
        }
        if (strerr == "") {
            localStorage.setItem("utilizadores", JSON.stringify(utilizadores))
            localStorage.setItem("docentes", JSON.stringify(docentes))
            location.reload()

        } else {
            console.log(strerr)
        }
    })


}