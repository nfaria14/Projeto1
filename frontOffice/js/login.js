function login(){
    // Referências para elementos HTML
    let optLogin = document.getElementById("optLogin")
    let optRegister = document.getElementById("optRegister")
    let optLogout=document.getElementById("optLogout")
    // Esconder opções de autenticação
    optLogout.style.display = 'none'
    optHi.style.display = 'none'

    //NAVBAR
    let optEventos = document.getElementById("optCriarEventos")
    optEventos.style.display = 'none'
    let optParcerias = document.getElementById("optGerirParcerias")
    optParcerias.style.display = 'none'


    console.log("ENTREI!!!")
    // Injetar admin 
    if (utilizadores.length == 0) {
        let admin = new Utilizador("admin", 2, "admin123@hotmail.com", 12345)
        utilizadores.push(admin);
        //enviar o array para localstorage
        localStorage.setItem("utilizadores", JSON.stringify(utilizadores))

    }



    let frmLogin = document.getElementById("frmLogin")

    // SUBMISSÃO DE AUTENTICAÇÃO
    frmLogin.addEventListener("submit", function (event) {
        // Obter as referências para as caixas de texto
        let inputLoginEmail = document.getElementById("inputLoginEmail")
        let inputLoginPassword = document.getElementById("inputLoginPassword")

        // Iterar sobre o array e verificar se o utilizador já existe
        let userExists = false
        let userName = ""
        let userID
        for (var i = 0; i < utilizadores.length; i++) {
            if (utilizadores[i].email == inputLoginEmail.value && utilizadores[i].password == inputLoginPassword.value) {
                userExists = true
                userName = utilizadores[i]._nome
                userID = utilizadores[i]._id
            }
        }

        // Se sim, autenticar utilizador
        if (userExists) {
            alert("Autenticação efetuado com sucesso!!")

            // ADICIONADO DIA 2 Verificar se é admin
            for (var i = 0; i < utilizadores.length; i++) {
                if (utilizadores[i].email == inputLoginEmail.value && utilizadores[i].password == inputLoginPassword.value && utilizadores[i].tipo == 2) {
                    window.location.replace('../../dashboard/index.html')

                } else {


                    localStorage.setItem("userID", userID)


                    // Fechar a modal
                    $('#loginModal').modal('hide')
                    // Alterar navbar 
                    optLogin.style.display = 'none'
                    optRegister.style.display = 'none'
                    optLogout.style.display = 'block'
                    optHi.innerHTML = "<a class='nav-link' href='#'>Olá, " +
                        userName + "</a>"
                    optHi.style.display = 'block'

                }
            }
            //MOSTRAR AS OPÇÕES DA NAVBAR DO DOCENTE 

            for (let i = 0; i < utilizadores.length; i++) {
                if (userID == utilizadores[i]._id) {
                    if (utilizadores[i]._tipo == 1) {

                        optEventos.style.display = 'block'
                        optParcerias.style.display = 'block'
                    }
                }
            }
            //---------------------------------------------------------
        } else {
            // Se não, exibir mensagem a indicar a inexistência do utilizador no array
            alert("Dados de autenticação inválidos!!")
        }
        event.preventDefault()

    })




    // LOGOUT
    optLogout.addEventListener("click", function () {
        optLogin.style.display = 'block'
        optRegister.style.display = 'block'
        optLogout.style.display = 'none'
        optHi.style.display = 'none'
        optEventos.style.display = 'none'
        optParcerias.style.display = 'none'
    })

    // SUBMISSÃO DE REGISTO
    let frmRegister = document.getElementById("frmRegister")
    frmRegister.addEventListener("submit", function () {
        //Validar pass iguais
        let inputPassword1 = document.getElementById("inputPassword1")
        let inputPassword2 = document.getElementById("inputPassword2")
        let strError = ""

        console.log(inputPassword1.value)
        console.log(inputPassword2.value)

        if (inputPassword1.value != inputPassword2.value) {
            strError = "As passwords têm de ser iguais"
        }

        //Validar se já existe um user com o mesmo email
        let inputEmail = document.getElementById("inputEmail")
        let userExist = false
        for (var i = 0; i < utilizadores.length; i++) {
            if (utilizadores[i].email == inputEmail.value) {
                userExist = true
            }
        }

        if (userExist) {
            strError += "\nEmail já existente!"
        }


        //Verificar se string de erro está vazia
        if (strError == "") {
            //Criar Objeto e enviar para o array
            let newUser = new Utilizador(inputName.value, 0, inputEmail.value, inputPassword1.value)
            utilizadores.push(newUser)
            //enviar o array para localstorage
            localStorage.setItem("utilizadores", JSON.stringify(utilizadores))

            alert("Registo efetuado com sucesso!!")
            // Fechar a modal
            $('#registoModal').modal('hide')
        } else {
            alert(strError)
        }
        event.preventDefault()
    })
}