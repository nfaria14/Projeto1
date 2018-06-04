
window.onload = function () {

    //Renderizar utilizadores
    renderUtilizadores()

    // Referências para elementos HTML
    let optLogin = document.getElementById("optLogin")
    let optRegister = document.getElementById("optRegister")

    // Injetar admin 
    if (utilizadores.length == 0) {
        let admin = new Utilizador("admin", 2, "admin123@hotmail.com", 12345)
        utilizadores.push(admin);
        //enviar o array para localstorage
        localStorage.setItem("utilizadores", JSON.stringify(utilizadores))

    }
    
    //enviar o array para localstorage
    //localStorage.setItem("utilizadores", JSON.stringify(utilizadores))

    let frmLogin = document.getElementById("frmLogin")
    // SUBMISSÃO DE AUTENTICAÇÃO
    frmLogin.addEventListener("submit", function (event) {
        // Obter as referências para as caixas de texto
        let inputLoginEmail = document.getElementById("inputLoginEmail")
        let inputLoginPassword = document.getElementById("inputLoginPassword")

        // Iterar sobre o array e verificar se o utilizador já existe
        let userExists = false
        let userName = ""
        for (var i = 0; i < utilizadores.length; i++) {
            if (utilizadores[i].email == inputLoginEmail.value && utilizadores[i].password == inputLoginPassword.value) {
                userExists = true
            }
        }

        // Se sim, autenticar utilizador
        if (userExists) {
            alert("Autenticação efetuado com sucesso!!")
            // Fechar a modal
            $('#loginModal').modal('hide')
        } else {
            // Se não, exibir mensagem a indicar a inexistência do utilizador no array
            alert("Dados de autenticação inválidos!!")
        }
        event.preventDefault()

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




