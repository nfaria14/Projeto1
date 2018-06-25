let nome2 = ""
let evento = ""
//Vai simplificar saber qual é o indice no array utilizadores do utilizador loggado
let indexUtilizador = localStorage.getItem("userID")-1;

//Vai servir para saber se há alguém com sessão iniciada ou não
let logged = false;
window.onload = function () {
    rendereventos()
    rendercategorias()
    renderUtilizadores()
    login()
    verificarlogin()
    rendercomentarios()
    renderComment()
    renderTestimonial()
    if(localStorage.getItem("userID")!=0){
        for(let i=0;i<utilizadores.length;i++){
            if(localStorage.getItem("userID")==utilizadores[i]._id){
                if(utilizadores[i]._tipo==0){
                    logged=true

                }
            }

        }
    }
    

    //EVENTOID
    let eventoid = localStorage.getItem("eventoID")
    let jaPontoou=false
    for(let i=0;i<eventos.length;i++){
        console.log(eventoid)
            if(eventos[i]._id==eventoid){
                console.log(eventos[i]._id)
                console.log(eventos[i].pontuacao)
                if(eventos[i]._pontuacao!=null){
                    console.log(eventos[i]._pontuacao)
                    document.getElementById('pontuacaoMedia').innerHTML = `${eventos[i]._pontuacao} <small style="font-size:20px">/5</small>`
                }else{
                    document.getElementById('pontuacaoMedia').innerHTML = `0<small style="font-size:20px">/5</small>`

                }
            }
    }
    //Referencias HTML
    let userID= localStorage.getItem("userID")
    let nome = document.getElementById("inputNome")
    let data = document.getElementById("inputData")
    let hora = document.getElementById("inputTime")
    let sala = document.getElementById("inputSala")
    let inputCategoria = document.getElementById("inputCategoria")
    let responsavel = document.getElementById("inputResponsavel")
    let imagem = document.getElementById("inputPoster")
    let inputDescricao=document.getElementById("inputDescricao")
    let guardar=document.getElementById("save")

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
           imagem.value = eventos[i]._imagem
           inputDescricao.value=eventos[i]._descricao

        }

    }
    for(let i=0;i<utilizadores.length;i++){
        if(userID==utilizadores[i]._id || userID==0){
            if(utilizadores[i]._tipo!=1){
                nome.setAttribute("disabled",true)
                data.setAttribute("disabled",true)
                hora.setAttribute("disabled",true)
                sala.setAttribute("disabled",true)
                inputCategoria.setAttribute("disabled",true)
                responsavel.setAttribute("disabled",true)
                imagem.setAttribute("disabled",true)
                inputDescricao.setAttribute("disabled",true)
                guardar.style.display='none'
            }
        }

    }
 
    let frmEventos = document.getElementById("frmEventos")
    frmEventos.addEventListener("submit", function (event) {
        //FAzer verificações
        event.preventDefault()
        let campos = inputCategoria.value.split(";")
        let existe = false
        //Verificar se as categorias existem
        for (let i = 0; i < campos.length; i++) {
            //Agora percorrer o array das categorias a ver se o campo x existe, se existir existe= true e sempre q ele acaba de percorrer isso verifica como o existe está
            for (let j = 0; j < categorias.length; j++) {
                if (campos[i].toUpperCase() == categorias[j]._nome.toUpperCase()) {
                    existe = true
                    stringcat += categorias[j]._nome + ";"
                    console.log("__" + stringcat)
                }
                console.log("__" + stringcat)
            }
            if (existe = true) {
                console.log(campos[i])
                existe = false

            } else {
                strerr += campos[i] + "Não existe"

            }
        }

        //Verificar se string de erro está vazia
        if (strerr == "") {
            //Alterar objeto
            for (let i = 0; i < eventos.length; i++) {
                if (eventos[i]._id == eventoid) {
                    eventos[i]._nome = nome.value
                    eventos[i]._descricao=inputDescricao.value
                    console.log(eventos)
                    eventos[i]._data = data.value
                    eventos[i]._hora = hora.value
                    eventos[i]._sala = sala.value
                    eventos[i]._categoria = inputCategoria.value
                    eventos[i]._responsavel = responsavel.value
                    eventos[i]._imagem = imagem.value
                }

            }

            //enviar o array para localstorage
            localStorage.setItem("eventos", JSON.stringify(eventos))
        } else {
            alert(strerr)
        }

    })




    document.getElementById("newComentario2").addEventListener("click", function (event) {
        event.preventDefault()
        console.log("ENTREIIIIIIIIIIIIIIIIIIII")
        let texto2 = document.getElementById("inputTexto2")

        let novoComent2 = new Comentario(nome2, evento, texto2.value)
        comentarios.push(novoComent2)
        localStorage.setItem("comentarios", JSON.stringify(comentarios))
        renderTestimonial()
        //  $('#comentarioModal').modal('hide')
        console.log("Estou aqui!!!!!!!!")
    })

    //PONTUAR
    let estrelitas = document.getElementsByClassName('btn btn-default btn-grey btn-sm')
    //console.log(estrelasPontuar)
    for (let i = 0; i < estrelitas.length; i++) {
        //this.console.log(estrelasPontuar[i])
        console.log("O utilizador quevai pontuar é:" +utilizadores[indexUtilizador]._nome )
        console.log("A string pontuou "+utilizadores[indexUtilizador]._pontoou.length)
        if (utilizadores[indexUtilizador]._pontoou.length > 0) {            
            for (let i = 0; i < utilizadores[indexUtilizador]._pontoou.length; i++) {
                console.log("ID DO EVENTO"+eventoid)
                if (utilizadores[indexUtilizador]._pontoou[i] == eventoid) {
                    
                    jaPontoou = true
                    console.log("O pontuar está:"+jaPontoou)
                }
            }
        }
        if(jaPontoou){
            console.log("Não pontuas porca")
      
            estrelitas[i].addEventListener('click', function(){
                alert("Já pontuou este evento")
            })

        }else{
            estrelitas[i].addEventListener('click', botaoPontuar)
            console.log("Podes pontuar")
        }
    }

    
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
            evento = eventos[i]._id
        }
    }


    console.log("C: ", nome2, evento)
}

function renderTestimonial() {

    let testimonial2 = document.getElementById("testimonial2")
    let userID = localStorage.getItem("userID")
    console.log(userID)
    // 2. Para cada Trip vou definir uma Card e compô-la com os dados do objeto

    let strHtmlCard2 = ""
    for (var i = 0; i < comentarios.length; i++) {

        //Verificação dos comentários para o respetivo evento
        if (comentarios[i]._evento == evento) {


            // Cria a card
            strHtmlCard2 += ` <div class="container">
            <div class="col-lg-12 col-md-6 col-sm-12 text-center">
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

//PONTUAR
let valorDeMercado = 0; //Valor que vai seer adicionado à pontuação
let eventito = ""
function botaoPontuar(e) { //Isto vai abrir um botão para deixar pontuar, cada utilizador só vai pontuar o evento 1 vez, secalhar adicionar um bolleano para dizer se já pontoou ou não

    let eventoID=localStorage.getItem("eventoID")

    

    for(let i=0;i<eventos.length;i++){
        if(eventos[i]._id==eventoID){
            eventito=new Evento(eventos[i]._nome,eventos[i]._data,eventos[i]._hora,eventos[i]._sala,eventos[i]._categoria,eventos[i]._responsavel,eventos[i]._imagem,eventos[i]._descricao, eventos[i]._pontuacao)
            console.log(eventoID)
            eventito._id=eventoID
            console.log("o evento defenido é:"+eventito.id)
            //console.log("ID DO EVENTITO AO CRIAR"+eventito_id)
        }
    }
    let jaPontoou = false

    if (utilizadores[indexUtilizador]._pontoou.length > 0) {
        for (let i = 0; i < utilizadores[indexUtilizador]._pontoou.length; i++) {
            console.log("ID DO EVENTO"+eventito._id)
            if (utilizadores[indexUtilizador]._pontoou[i] == eventito._id) {
                jaPontoou = true
            }
        }
    }

    if (logged && jaPontoou == false) {
        let botaozao = document.getElementById('botaoPontuar')
        let estrelasPontuar = document.getElementsByClassName('btn btn-default btn-grey btn-sm')

        botaozao.style.display = 'inline-block'


        if (e.target.id == "") valorDeMercado = parseInt(e.target.parentNode.id)
        else valorDeMercado = parseInt(e.target.id)
        let botone = document.getElementById('botaoPontuar')
        botone.addEventListener('click', realmentePontuar)

        console.log(valorDeMercado)

        for (let i = 0; i < estrelasPontuar.length; i++) {
            if (estrelasPontuar[i].id <= valorDeMercado) {
                estrelasPontuar[i].style.background = "rgb(255,193,7)"
            }
            else {
                estrelasPontuar[i].style.background = "grey"
            }//class="fa fa-star"
        }
    }
    else {
        if (jaPontoou == true) alert('Já pontuaste este evento')
        else alert("Tens que estar logado como estudante para pontuar")
    }

}

function realmentePontuar() { //Em principio as matemáticas vão ser feitas na classe
    console.log("o evento a mostrar é este:"+eventito)
    let elIndex = 0;
    for (let i = 0; i < eventos.length; i++) {
        if (eventos[i].id == eventito._id) {
            elIndex = i
        }
    }

    console.log(eventos[elIndex]._nome) //Dá o que quero
    console.log(valorDeMercado)
    eventos[elIndex].pontuacao = valorDeMercado
    document.getElementById('pontuacaoMedia').innerHTML = `${eventos[elIndex]._pontuacao} <small style="font-size:20px">/5</small>`
    localStorage.removeItem('eventos')
    localStorage.setItem('eventos', JSON.stringify(eventos))
    //Fazer com que o utilizador não possa voltar a pontuar
    console.log("ID DO EVENTO"+eventito._id)
    utilizadores[indexUtilizador]._pontoou += eventito._id
    localStorage.setItem('utilizadores', JSON.stringify(utilizadores))
   
}

