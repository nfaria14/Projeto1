
window.onload = function () {

    //Renderizar utilizadores
    renderUtilizadores()
    login()
   verificarlogin()
    console.log(window.location.href)
    rendereventos()
    renderTable()

}

function renderTable() {
    let temparray = []
    let top3 = document.getElementById("top3")
    //Mandar os 3 melhores eventos para o array temporário
    for (let i = 0; i < eventos.length; i++) {
        if (eventos[i]._pontuacao == undefined) {
            eventos[i]._pontuacao = 0
        }
    }

    //Ordenar antes de mandar
     for (let i = 0; i < eventos.length; i++) {
        if (i > 0) {
            console.log(eventos[i]._pontuacao)

            if (eventos[i - 1]._pontuacao < eventos[i]._pontuacao) {
                objtemp = eventos[i - 1]
                console.log(objtemp)
                eventos[i - 1] = eventos[i]
                eventos[i] = objtemp
                i = 0
            }
        }
    }
    let contador=0
           for(let i=0;i<eventos.length;i++){
               if(contador<3){
                console.log(eventos[i])
                temparray.push(eventos[i])
                contador++
               }
          
        }
   
    //Fazer os cards dos eventos
    let strHtmlCard = ""
    for (let i = 0; i < temparray.length; i++) {
        // Inicia a linha
        if (i % 3 == 0) {
            strHtmlCard += `<div class="row">`
        }

        // Cria a card
        strHtmlCard += `<div class="col-sm-4">
                <div class="card h-100" >
                    <img class="card-img-top" src="${temparray[i]._imagem}" height="200" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${temparray[i]._nome}</h5>
                        <p class="card-text">${temparray[i]._categoria}</p>
                        <div align="center">
                        <a id="${temparray[i]._id}" href="descricaoEvento.html" class="btn btn-warning btn-lg btn-block edit">Ver</a>
                        </div>`
                      
        strHtmlCard += `</div>
                </div>      
            </div>`

        // Fecha a linha
        if (i % 3 == 2) {
            strHtmlCard += `</div>`
        }

    }

    top3.innerHTML=strHtmlCard

     //Obter todos os botões EDIT
     let btnEdit = document.getElementsByClassName("edit")
     //Criar um campo na base de dados para guardar o evento que se vai editar
     for (let i = 0; i < btnEdit.length; i++) {
         btnEdit[i].addEventListener("click", function () {
             let eventoID = btnEdit[i].getAttribute("id")
             localStorage.setItem("eventoID", eventoID)
             console.log(eventoID)
         })
 
     }
}



